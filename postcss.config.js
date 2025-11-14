module.exports = {
  plugins: [
    require('postcss-url')({
      url: (asset) => {
        // Only modify URLs in production
        if (process.env.NODE_ENV === 'production' && !asset.url.startsWith('http')) {
          return `/AsterionQuartz${asset.url}`;
        }
        return asset.url;
      },
    }),
  ],
};