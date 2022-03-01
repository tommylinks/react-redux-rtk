const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = () => ({
  webpack: {
    alias: {
      '@configs': resolvePath('./src/configs'),
      '@modules': resolvePath('./src/modules'),
      '@utils': resolvePath('./src/utils'),
      '@assets': resolvePath('./src/assets'),
    },
  },
});
