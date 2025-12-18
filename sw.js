self.addEventListener("install", e=>{
e.waitUntil(
caches.open("gst-cache").then(c=>
c.addAll(["./","./index.html","./data/public_data.json"])
)
);
});

self.addEventListener("fetch", e=>{
e.respondWith(
caches.match(e.request).then(res=>res||fetch(e.request))
);
});