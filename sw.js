const CACHE_NAME = 'ampel-ki-roboflow-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.roboflow.com/0.2.26/roboflow.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
