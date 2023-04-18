import colors from './Colors';

// Shadow is working differenty for iOS and Android
// https://reactnative.dev/docs/shadow-props

export const cardShadow = {
  // Shadow color
  shadowColor: colors.black[75],
  // Android
  elevation: 15,
  //iOS
  shadowOffset: {width: 0, height: +1.5},
  shadowOpacity: 0.26,
};
