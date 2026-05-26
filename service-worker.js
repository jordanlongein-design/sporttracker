const CACHE_NAME='sporttracker-mobile-v6-3-incline-complet-20260526';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
