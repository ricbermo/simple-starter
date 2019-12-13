import {createStackNavigator} from 'react-navigation-stack';
import Sample from 'screens/Sample';

const Home = createStackNavigator({
  Home: {
    screen: Sample,
    navigationOptions: {
      title: 'Welcome',
    },
  },
});

export default Home;
