import {} from 'styled-components';

import theme from './';
import {IFontGroup} from './Typography';

declare module 'styled-components' {
  type Theme = typeof theme & {fonts: IFontGroup};
  export interface DefaultTheme extends Theme {}
}
