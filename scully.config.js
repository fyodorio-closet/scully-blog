exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/blog/:slug': {
      'type': 'json',
      'slug': {
        'url': 'https://dev.to/api/articles?username=fyodorio',
        'property': 'slug'
      }
    },
  }
};
