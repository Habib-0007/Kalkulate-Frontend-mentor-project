self.addEventListener(
	"install",
	function (event) {
		event.waitUntil(
			caches
				.open("kalkulate-pwa")
				.then(function (cache) {
					return cache.addAll([
						"/",
						"/index.html",
						"/style.css",
						"/icon.png",
						"/script.js",
					]);
				})
		);
	}
);

self.addEventListener(
	"fetch",
	function (event) {
		event.respondWith(
			caches
				.match(event.request)
				.then(function (response) {
					return (
						response ||
						fetch(event.request)
					);
				})
		);
	}
);
