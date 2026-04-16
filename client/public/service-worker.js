/**
 * Rising Digital IA - Progressive Web App Service Worker
 * Version: 2.0.0
 * 
 * Stratégies de cache optimisées:
 * - Cache-first: Assets statiques (CSS, JS, images, fonts)
 * - Network-first: HTML et contenu dynamique
 * - Stale-while-revalidate: Ressources semi-dynamiques (fonts Google)
 * 
 * Performance: Chargement ultra-rapide, fonctionnement offline partiel
 */

const CACHE_VERSION = 'v2.0.0';
const CACHE_NAME = `rising-digital-${CACHE_VERSION}`;
const OFFLINE_URL = '/offline.html';

// Assets critiques à mettre en cache au premier chargement
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/pwa-install-handler.js',
  '/pwa-ui-handler.js',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap',
];

// Patterns pour différentes stratégies de cache
const CACHE_STRATEGIES = {
  cacheFirst: [
    /\.css$/,
    /\.js$/,
    /\.woff2?$/,
    /\.ttf$/,
    /\.eot$/,
    /\.svg$/,
    /\.(png|jpg|jpeg|gif|webp)$/,
    /d2xsxph8kpxj0f\.cloudfront\.net/,
    /\/icon-/,
  ],
  networkFirst: [
    /\.html$/,
    /^https?:\/\/(www\.)?msa37\.github\.io/,
    /\/api\//,
  ],
  staleWhileRevalidate: [
    /^https?:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com|cloud\.umami\.is)/,
  ],
};

// ============================================
// EVENT: Install
// ============================================
self.addEventListener('install', (event) => {
  console.log('[SW] Installation du service worker', CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Mise en cache des assets critiques...');
      return cache.addAll(CRITICAL_ASSETS).catch((error) => {
        console.warn('[SW] Erreur lors de la mise en cache des assets critiques:', error);
        // Continuer même si certains assets échouent
        return Promise.resolve();
      });
    })
  );
  // Force le SW à devenir actif immédiatement
  self.skipWaiting();
});

// ============================================
// EVENT: Activate
// ============================================
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation du service worker');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression du cache ancien:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Prendre le contrôle des clients immédiatement
  self.clients.claim();
});

// ============================================
// EVENT: Fetch
// ============================================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignorer les requêtes non-GET et les extensions Chrome
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') return;
  
  const strategy = getStrategy(url);
  
  if (strategy === 'cache-first') {
    event.respondWith(cacheFirstStrategy(request));
  } else if (strategy === 'network-first') {
    event.respondWith(networkFirstStrategy(request));
  } else if (strategy === 'stale-while-revalidate') {
    event.respondWith(staleWhileRevalidateStrategy(request));
  } else {
    event.respondWith(networkFirstStrategy(request));
  }
});

// ============================================
// EVENT: Message (Communication avec le client)
// ============================================
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Skip waiting demandé par le client');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('[SW] Nettoyage du cache demandé');
    caches.delete(CACHE_NAME).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Détermine la stratégie de cache appropriée pour une URL
 */
function getStrategy(url) {
  const urlString = url.toString();
  
  for (const pattern of CACHE_STRATEGIES.cacheFirst) {
    if (pattern.test(urlString)) return 'cache-first';
  }
  
  for (const pattern of CACHE_STRATEGIES.networkFirst) {
    if (pattern.test(urlString)) return 'network-first';
  }
  
  for (const pattern of CACHE_STRATEGIES.staleWhileRevalidate) {
    if (pattern.test(urlString)) return 'stale-while-revalidate';
  }
  
  return 'network-first';
}

/**
 * Stratégie Cache-First: Retourne le cache si disponible, sinon fetch
 */
async function cacheFirstStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    console.log('[SW] Cache hit:', request.url);
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.warn('[SW] Fetch failed, returning offline response:', request.url);
    return getOfflineResponse(request);
  }
}

/**
 * Stratégie Network-First: Essaie le réseau d'abord, fallback au cache
 */
async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.warn('[SW] Network failed, trying cache:', request.url);
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    return cached || getOfflineResponse(request);
  }
}

/**
 * Stratégie Stale-While-Revalidate: Retourne le cache immédiatement, met à jour en arrière-plan
 */
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached || getOfflineResponse(request));
  
  return cached || fetchPromise;
}

/**
 * Retourne une réponse offline appropriée
 */
async function getOfflineResponse(request) {
  const cache = await caches.open(CACHE_NAME);
  
  // Pour les requêtes HTML, retourner la page offline
  if (request.headers.get('accept')?.includes('text/html')) {
    const offline = await cache.match(OFFLINE_URL);
    if (offline) return offline;
  }
  
  // Pour les autres, retourner une réponse vide
  return new Response('Offline - Resource not available', { 
    status: 503,
    statusText: 'Service Unavailable'
  });
}

// ============================================
// BACKGROUND SYNC (Optionnel - pour les notifications)
// ============================================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-notifications') {
    event.waitUntil(syncNotifications());
  }
});

async function syncNotifications() {
  console.log('[SW] Background sync triggered');
  // À implémenter selon vos besoins
}

// ============================================
// PUSH NOTIFICATIONS (Optionnel - pour les notifications push)
// ============================================
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body || 'Nouvelle notification',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'rising-digital-notification',
    requireInteraction: false,
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'Rising Digital IA', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      for (let client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

console.log('[SW] Service Worker loaded successfully');
