import {Dimensions, Platform} from 'react-native';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');
const isIosDevice = Platform.OS === 'ios';

module.exports = {
  deviceHeight,
  deviceWidth,
  isIosDevice,

  // Color and backgroundColor
  primaryColor: '#3CBFAE',
  whiteColor: '#ffffff',
  greyThemeColor: '#424c58',
  lightGray: 'rgba(216, 219, 222, 0.4)',
  grayShadowColor: '#929292',
  greenColor: '"#2a8386"'
};
