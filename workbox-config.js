module.exports = {
	globDirectory: "dist/",
	globPatterns: ["**/*.{css,js,html,webmanifest,svg}"],
	swDest: "dist/sw.js",
	swSrc: "src/sw-template.js",
	// ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
