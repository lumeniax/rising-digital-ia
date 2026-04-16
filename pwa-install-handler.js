/**
 * PWA Installation & Notification Handler v3
 * Gère l'installation native, les notifications et l'expérience utilisateur PWA
 * 
 * Fonctionnalités:
 * - Détection intelligente de beforeinstallprompt
 * - Bouton d'installation personnalisé
 * - Notifications push
 * - Détection de l'installation
 * - Gestion des mises à jour du service worker
 */

class PWAHandler {
  constructor() {
    this.deferredPrompt = null;
    this.installButton = null;
    this.isInstalled = false;
    this.isOnline = navigator.onLine;
    this.swRegistration = null;
    this.init();
  }

  /**
   * Initialisation du handler PWA
   */
  init() {
    console.log('[PWA] Initialisation du gestionnaire PWA');
    
    // Vérifier si l'app est déjà installée
    this.checkIfInstalled();
    
    // Écouter l'événement beforeinstallprompt (Android)
    window.addEventListener('beforeinstallprompt', (e) => this.handleBeforeInstallPrompt(e));
    
    // Écouter l'événement appinstalled
    window.addEventListener('appinstalled', () => this.handleAppInstalled());
    
    // Écouter les changements de connexion
    window.addEventListener('online', () => this.handleOnline());
    window.addEventListener('offline', () => this.handleOffline());
    
    // Créer le bouton d'installation
    this.createInstallButton();
    
    // Enregistrer le service worker
    this.registerServiceWorker();
    
    // Vérifier les mises à jour du service worker
    this.checkServiceWorkerUpdates();
  }

  /**
   * Vérifie si l'application est déjà installée
   */
  checkIfInstalled() {
    // Vérifier le mode standalone (iOS)
    if (window.navigator.standalone === true) {
      this.isInstalled = true;
      console.log('[PWA] Application installée (iOS)');
      return;
    }
    
    // Vérifier le display mode (Android)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
      console.log('[PWA] Application installée (Android)');
      return;
    }
    
    // Vérifier le localStorage
    if (localStorage.getItem('pwa-installed') === 'true') {
      this.isInstalled = true;
      console.log('[PWA] Application marquée comme installée');
    }
  }

  /**
   * Gère l'événement beforeinstallprompt
   */
  handleBeforeInstallPrompt(e) {
    e.preventDefault();
    this.deferredPrompt = e;
    console.log('[PWA] beforeinstallprompt capturé, prêt pour l\'installation');
    this.updateUI();
  }

  /**
   * Gère l'événement appinstalled
   */
  handleAppInstalled() {
    this.isInstalled = true;
    this.deferredPrompt = null;
    localStorage.setItem('pwa-installed', 'true');
    this.updateUI();
    console.log('[PWA] Application installée avec succès');
    this.showNotification(
      'Installation réussie! 🎉',
      'Rising Digital IA est maintenant sur votre écran d\'accueil. Accédez-y rapidement!'
    );
  }

  /**
   * Gère la connexion en ligne
   */
  handleOnline() {
    this.isOnline = true;
    console.log('[PWA] Connexion rétablie');
    this.updateUI();
  }

  /**
   * Gère la déconnexion
   */
  handleOffline() {
    this.isOnline = false;
    console.log('[PWA] Mode offline activé');
    this.updateUI();
  }

  /**
   * Crée le bouton d'installation personnalisé
   */
  createInstallButton() {
    // Vérifier si le bouton existe déjà
    if (document.getElementById('pwa-install-button')) {
      this.installButton = document.getElementById('pwa-install-button');
    } else {
      const btn = document.createElement('button');
      btn.id = 'pwa-install-button';
      btn.className = 'pwa-install-button';
      btn.setAttribute('aria-label', 'Installer l\'application');
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
        <span>Installer l'app</span>
      `;
      
      // Injecter les styles
      this.injectStyles();
      
      // Ajouter le bouton au DOM
      document.body.appendChild(btn);
      this.installButton = btn;
    }
    
    // Ajouter l'écouteur de clic
    this.installButton.addEventListener('click', () => this.promptInstall());
    
    // Mettre à jour l'UI
    this.updateUI();
  }

  /**
   * Injecte les styles CSS pour le bouton d'installation
   */
  injectStyles() {
    if (document.getElementById('pwa-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'pwa-styles';
    style.textContent = `
      /* Bouton d'installation PWA */
      .pwa-install-button {
        position: fixed;
        bottom: 100px;
        right: 20px;
        display: none;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        color: white;
        border: none;
        border-radius: 50px;
        box-shadow: 0 8px 24px rgba(30, 58, 138, 0.35);
        cursor: pointer;
        z-index: 9998;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .pwa-install-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 32px rgba(30, 58, 138, 0.4);
      }
      
      .pwa-install-button:active {
        transform: translateY(0);
      }
      
      .pwa-install-button.visible {
        display: flex;
        animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .pwa-install-button svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
      }
      
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Indicateur de statut offline */
      .pwa-offline-indicator {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #f97316;
        color: white;
        padding: 12px 16px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        animation: slideDown 0.3s ease-out;
      }
      
      @keyframes slideDown {
        from {
          transform: translateY(-100%);
        }
        to {
          transform: translateY(0);
        }
      }
      
      /* Responsive */
      @media (max-width: 640px) {
        .pwa-install-button {
          bottom: 80px;
          right: 12px;
          left: 12px;
          justify-content: center;
        }
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Met à jour l'UI du bouton d'installation
   */
  updateUI() {
    if (!this.installButton) return;
    
    // Afficher le bouton si:
    // 1. Il y a un deferred prompt (beforeinstallprompt capturé)
    // 2. L'app n'est pas déjà installée
    // 3. On est en ligne
    if (this.deferredPrompt && !this.isInstalled && this.isOnline) {
      this.installButton.classList.add('visible');
    } else {
      this.installButton.classList.remove('visible');
    }
  }

  /**
   * Affiche le prompt d'installation
   */
  async promptInstall() {
    if (!this.deferredPrompt) {
      console.warn('[PWA] Aucun deferred prompt disponible');
      return;
    }
    
    // Afficher le prompt
    this.deferredPrompt.prompt();
    
    // Attendre la réponse de l'utilisateur
    const { outcome } = await this.deferredPrompt.userChoice;
    console.log(`[PWA] Choix de l'utilisateur: ${outcome}`);
    
    // Réinitialiser le deferred prompt
    this.deferredPrompt = null;
    this.updateUI();
  }

  /**
   * Enregistre le service worker
   */
  async registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('[PWA] Service Worker non supporté');
      return;
    }
    
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
        updateViaCache: 'none',
      });
      
      this.swRegistration = registration;
      console.log('[PWA] Service Worker enregistré:', registration);
      
      // Demander la permission pour les notifications
      this.requestNotificationPermission();
      
      // Écouter les mises à jour du service worker
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('[PWA] Nouvelle version du service worker disponible');
            this.promptServiceWorkerUpdate();
          }
        });
      });
      
    } catch (error) {
      console.error('[PWA] Erreur lors de l\'enregistrement du service worker:', error);
    }
  }

  /**
   * Vérifie les mises à jour du service worker
   */
  checkServiceWorkerUpdates() {
    if (!('serviceWorker' in navigator)) return;
    
    // Vérifier les mises à jour toutes les heures
    setInterval(() => {
      navigator.serviceWorker.ready.then((registration) => {
        registration.update();
      });
    }, 60 * 60 * 1000);
  }

  /**
   * Affiche un prompt pour mettre à jour le service worker
   */
  promptServiceWorkerUpdate() {
    const updatePrompt = document.createElement('div');
    updatePrompt.className = 'pwa-update-prompt';
    updatePrompt.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px; background: #3b82f6; color: white; padding: 16px; border-radius: 8px; margin: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        <span style="flex: 1;">Une nouvelle version est disponible</span>
        <button id="pwa-update-btn" style="background: white; color: #3b82f6; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 600; cursor: pointer;">Mettre à jour</button>
      </div>
    `;
    
    document.body.appendChild(updatePrompt);
    
    document.getElementById('pwa-update-btn').addEventListener('click', () => {
      if (this.swRegistration && this.swRegistration.waiting) {
        this.swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
      }
    });
  }

  /**
   * Demande la permission pour les notifications
   */
  async requestNotificationPermission() {
    if (!('Notification' in window)) {
      console.warn('[PWA] Notifications non supportées');
      return;
    }
    
    if (Notification.permission === 'granted') {
      console.log('[PWA] Permission de notification déjà accordée');
      return;
    }
    
    if (Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('[PWA] Permission de notification accordée');
        this.showNotification(
          'Notifications activées 🔔',
          'Vous recevrez les mises à jour importantes de Rising Digital IA'
        );
      }
    }
  }

  /**
   * Affiche une notification
   */
  showNotification(title, body, options = {}) {
    if (!('Notification' in window) || Notification.permission !== 'granted') {
      return;
    }
    
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, {
        body,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: 'rising-digital-notification',
        requireInteraction: false,
        ...options,
      });
    });
  }

  /**
   * Obtient le statut de l'installation
   */
  getInstallationStatus() {
    return {
      isInstalled: this.isInstalled,
      isOnline: this.isOnline,
      canInstall: !!this.deferredPrompt && !this.isInstalled,
      swRegistered: !!this.swRegistration,
    };
  }
}

// Initialiser le handler PWA au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.pwaHandler = new PWAHandler();
  });
} else {
  window.pwaHandler = new PWAHandler();
}

console.log('[PWA] PWA Handler loaded successfully');
