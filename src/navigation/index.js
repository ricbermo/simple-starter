import React from 'react';
import {createAppContainer} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import Home from './Home';

const Root = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      Home,
    },
    {
      initialRouteName: 'Home',
      transition: (
        <Transition.Together>
          <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
        </Transition.Together>
      ),
    },
  ),
);

export default Root;
