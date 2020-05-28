import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = size => size * PixelRatio.getFontScale();

export const boxShadow = (
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2
) => ({
  shadowColor: color,
  shadowOffset: offset,
  shadowOpacity: opacity,
  shadowRadius: radius,
  elevation: radius,
});
