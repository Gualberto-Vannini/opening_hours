const allFonts = {
  ROBOTO_REGULAR: 'Roboto-Regular',
  ROBOTO_MEDIUM: 'Roboto-Medium',
  ROBOTO_BOLD: 'Roboto-Bold',
};

export interface IFontGroup {
  regular: string;
  medium: string;
  bold: string;
}

const fontMap: IFontGroup = {
  regular: allFonts.ROBOTO_REGULAR,
  medium: allFonts.ROBOTO_MEDIUM,
  bold: allFonts.ROBOTO_BOLD,
};

type ValidSpaceKeys = number | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
const fontSizes: {[K in ValidSpaceKeys]: string} = {
  xs: '11px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '24px',
  xxl: '30px',
};

const fontSizeNumbers: {[K in ValidSpaceKeys]: number} = {
  xs: 11,
  s: 14,
  m: 16,
  l: 18,
  xl: 22,
  xxl: 30,
};

export {fontSizes, fontSizeNumbers, fontMap};
