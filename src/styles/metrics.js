import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const metrics = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,

  padding_small: 6,
  padding_medium: 10,
  padding_larger: 14,

  margin_small: 6,
  margin_mediun: 10,
  margin_larger: 14,
};
