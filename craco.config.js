const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = () => ({
  webpack: {
    alias: {
      '@pages': resolvePath('./src/pages'),
      '@src': resolvePath('./src'),
      '@utils': resolvePath('./src/utils'),
      '@assets': resolvePath('./src/assets'),
    },
  },
});
