const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Prioritize files with '.web' extensions when names are identical.
  config.resolve.extensions.unshift(
    '.web.ts',
    '.web.tsx',
    '.web.js',
    '.web.jsx'
  );

  // Alias react-native dependencies for react-native-web
  if (!('alias' in config.resolve)) config.resolve.alias = {};

  config.resolve.alias['react-native$'] = 'react-native-web';

  return config;
});
