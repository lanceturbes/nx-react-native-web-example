import { StrictMode } from 'react';
import { AppRegistry } from 'react-native';

import { App } from './app/app';

AppRegistry.registerComponent('App', () => () => (
  <StrictMode>
    <App />
  </StrictMode>
));
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
