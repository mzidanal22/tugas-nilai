/* Service worker khusus notifikasi push Zidan Labs.
   Taruh di folder yang sama dengan index.html (GitHub Pages). Didaftarkan dengan lingkup ./fcm-push/ supaya tidak bentrok dengan sw.js.
   Server mengirim pesan data-only: { judul, isi, tag, url }. Tampilannya diatur di sini. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let p = {};
  try { p = e.data ? e.data.json() : {}; } catch (x) { p = {}; }
  const d = p.data || p.notification || p;   // FCM membungkus pesan data di "data"
  const judul = String(d.judul || d.title || 'Zidan Labs');
  e.waitUntil(self.registration.showNotification(judul, {
    body: String(d.isi || d.body || ''),
    tag: String(d.tag || 'umum'),               // tag sama = menggantikan, bukan menumpuk
    icon: 'icon-192.png',
    badge: 'favicon-32.png',
    data: { url: String(d.url || '') },
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || new URL('./', self.registration.scope).href.replace(/fcm-push\/$/, '');
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if (c.url.indexOf(url.split('#')[0]) === 0 && 'focus' in c) return c.focus(); }
    return self.clients.openWindow(url);
  }));
});
