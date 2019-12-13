import EStyleSheet from 'react-native-extended-stylesheet';

const colors = {
  white: '#fff',
  black: '#222222',
};

export const getColor = color => EStyleSheet.value(color);
export default colors;
