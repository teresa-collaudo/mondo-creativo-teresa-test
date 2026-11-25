const C='teresa-v83-alpha4';
const core=['./','./index.html'];
const optional=['./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable.png'];
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(C);await c.addAll(core);await Promise.all(optional.map(x=>c.add(x).catch(()=>{})));await self.skipWaiting()})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('teresa-')&&k!==C)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request).catch(async()=>await caches.match(e.request)||(e.request.mode==='navigate'?await caches.match('./index.html'):null)||Response.error()))});
