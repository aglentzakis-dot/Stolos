// Ελάχιστος service worker για τον «Στόλο».
// ΔΕΝ αποθηκεύει τίποτα στη μνήμη επίτηδες, ώστε κάθε άνοιγμα να φέρνει
// πάντα την τελευταία έκδοση του index.html και να μη μένει κολλημένο σε παλιά.
self.addEventListener("install", function(e){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(e){ /* απευθείας από το δίκτυο */ });
