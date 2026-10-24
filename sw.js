// Minimaler Service Worker: keine Eingriffe in Netzwerkanfragen,
// räumt alte Caches auf und übernimmt sofort die Kontrolle.
self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(keys) { return Promise.all(keys.map(function(k) { return caches.delete(k); })); })
      .then(function() { return self.clients.claim(); })
  );
});
