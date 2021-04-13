module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.js'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/sw.js'
};