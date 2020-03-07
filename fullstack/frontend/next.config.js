const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
	withLess({
		lessLoaderOptions: {
			javascriptEnabled: true
		},
		publicRuntimeConfig: {
			APP_NAME: 'Comics Ghor',
			API_DEVELOPMENT: 'http://localhost:8000/api',
			PRODUCTION: false,
			API_IMGUR: '6cdf3a9a3109a64',
			DOMAIN_DEV: 'http://localhost:3000',
			DOMAIN_PROD: 'https://comicsghor.com',
			FB_APP_ID: '526504354662233',
			DISQUS_SHORTNAME: 'comics-ghor'
		}
	})
);
