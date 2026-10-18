// Service worker minimal: hanya supaya aplikasi bisa dipasang di layar utama.
// Sengaja TIDAK menyimpan (cache) apa pun, jadi setiap pembaruan aplikasi langsung dipakai siswa.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // diteruskan ke jaringan seperti biasa
