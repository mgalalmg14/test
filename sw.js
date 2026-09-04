// Service Worker - يفعّل خاصية "تثبيت التطبيق" ويضمن جلب أحدث نسخة دائمًا (بدون كاش قديم)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // شبكة أولاً دائمًا - يمنع المتصفح من عرض نسخة قديمة محفوظة عند التحديث
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(() => fetch(event.request))
  );
});
