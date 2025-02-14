"use strict";
const CACHE_NAME = 'budugu-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/dist/index.js' //  Cache the compiled JavaScript
];
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME)
        .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
    }));
});
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
        .then(response => {
        // Cache hit - return response
        if (response) {
            return response;
        }
        return fetch(event.request);
    }));
});
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
            return null;
        }).filter(promise => promise !== null));
    }));
});
//# sourceMappingURL=service-worker.js.map