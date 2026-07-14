// Minimální service worker — jediný účel je splnit podmínku "instalovatelnosti"
// PWA v Android prohlížečích (Chrome, Samsung Internet), aby se plně použila
// ikona z manifest.json a appka se chovala jako skutečně nainstalovaná, ne jen
// jako záložka se screenshotem.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Zatím bez offline cachování — jen registrace jako taková appce pomůže
// se správným rozpoznáním instalovatelnosti.
self.addEventListener('fetch', () => {});
