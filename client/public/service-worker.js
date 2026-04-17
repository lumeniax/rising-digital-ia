/**
 * Rising Digital IA - Progressive Web App Service Worker
 * Version: 3.0.0
 *
 * Stratégies de cache:
 * - Cache-first: Assets statiques (CSS, JS, images, fonts)
 * - Network-first: HTML et contenu dynamique
 * - Stale-while-revalidate: Fonts Google
 */

const CACHE_VERSION = 'v3.0.0';
const CACHE_NAME = `rising-digital-${CACHE_VERSION}`;

const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap',
];

const CACHE_STRATEGIES = {
  cacheFirst: [
    /\.css$/,
    /\.js$/,
    /\.woff2?$/,
    /\.ttf$/,
    /\.eot$/,
    /\.svg$/,
    /\.(png|jpg|jpeg|gif|webp)$/,
    /\/icon-/,
  ],
  networkFirst: [
    /\.html$/,
    /\/api\//,
  ],
  staleWhileRevalidate: [
    /^https?:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com)/,
  ],
};

self.addEventListener('install', (event) => {
  console.log('[SW] Installation', CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_ASSETS).catch((error) => {
        console.warn('[SW] Erreur cache install:', error);
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activation');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') return;

  const strategy = getStrategy(url);

  if (strategy === 'cache-first') {
    event.respondWith(cacheFirstStrategy(request));
  } else if (strategy === 'stale-while-revalidate') {
    event.respondWith(staleWhileRevalidateStrategy(request));
  } else {
    event.respondWith(networkFirstStrategy(request));
  }
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data?.type === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

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

async function cacheFirstStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    return cached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  return cached || fetchPromise;
}

self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'Rising Digital IA', {
      body: data.body || 'Nouvelle notification',
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: 'rising-digital-notification',
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});

console.log('[SW] Service Worker chargé avec succès');
