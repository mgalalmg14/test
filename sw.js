// Service Worker بسيط - مطلوب فقط عشان يفعّل خاصية "تثبيت التطبيق" في المتصفح
const CACHE_NAME = 'risk-app-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // مرور مباشر - مفيش تخزين مؤقت، بس ده كافي لتفعيل خاصية "قابل للتثبيت"
  event.respondWith(fetch(event.request));
});
