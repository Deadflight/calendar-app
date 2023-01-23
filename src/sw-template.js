importScripts(
	"https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const cacheFirstNetwork = [
	"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
	"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css",
	"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
];

registerRoute(({ request, url }) => {
	if (cacheFirstNetwork.includes(url.href)) return true;

	return false;
}, new CacheFirst());

const cacheNetworkFirst = ["/api/auth/renew", "/api/events"];

registerRoute(({ request, url }) => {
	// console.log({request, url})
	if (cacheNetworkFirst.includes(url.pathname)) return true;

	return false;
}, new NetworkFirst());

// Reference
// registerRoute(
//     new RegExp('http://localhost:4000/api/auth/renew'),
//     new NetworkFirst()
// )

// Posteos Offline
const bgSyncPlugin = new BackgroundSyncPlugin("calendar-offline-posts", {
	maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

const API_URL = "https://calendar-app-backend-n085.onrender.com/api";

registerRoute(
	new RegExp(`${API_URL}/events`),
	new NetworkOnly({
		plugins: [bgSyncPlugin],
	}),
	"POST"
);

registerRoute(
	new RegExp(`${API_URL}/events/`),
	new NetworkOnly({
		plugins: [bgSyncPlugin],
	}),
	"DELETE"
);

registerRoute(
	new RegExp(`${API_URL}/events/`),
	new NetworkOnly({
		plugins: [bgSyncPlugin],
	}),
	"PUT"
);
