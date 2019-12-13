import EStyleSheet from 'react-native-extended-stylesheet';
import colors from './colors';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: '$black',
  },
});

export default styles;
