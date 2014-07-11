self.oninstall = function (event) {
  console.log(event);
  event.waitUntil(
    caches.create('static-v1').then(function (cache) {
      cache.add(
        'index.html',
        'app.js'
      )
    })
  );
};

self.onfetch = function (event) {
  console.log(event);
}