'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1e3bb064a5b9991bb53ee964f63d8204",
"assets/assets/default_artwork.jpg": "d5c1caec75c5b7d21f7260ea9163356c",
"assets/assets/logo.png": "2c71de2198f897535083b64ab4e431a7",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "2152acf3d04ccbf049b7b8a82b1d77c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b1618cdcdb3af76cbb258736ca56c916",
"/": "b1618cdcdb3af76cbb258736ca56c916",
"main.dart.js": "6a1a05b00c7c9dffce438e175b25edfd",
"manifest.json": "a55c7bbb21f15d6d435190fc4d59555d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
