import 'react-native-gesture-handler';
import {YellowBox, AppRegistry} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from 'colors';

import App from './src/App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: Async Storage',
  "Warning: Can't perform",
  'Possible Unhandled Promise Rejection',
  'RCTBridge required',
  'Setting a timer for a long period of time,',
]);

const theme = Object.keys(colors).reduce((acc, curr) => {
  const key = `$${curr}`;
  acc[key] = colors[curr];
  return acc;
}, {});

EStyleSheet.build({
  $theme: 'user',
  ...theme,
});

AppRegistry.registerComponent(appName, () => App);
