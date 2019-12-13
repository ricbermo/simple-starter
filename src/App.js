import React from 'react';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import RootNavigator from 'navigation';
import NavigationService from 'navigation/NavigationService';
import Reactotron from '../ReactotronConfig';
import rootReducer from 'reducers';

const store = configureStore({
  reducer: rootReducer,
  enhancers: [Reactotron.createEnhancer()],
});

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
