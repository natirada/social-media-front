import 'styled-components';
import {
   colors,
   fontFamilies,
   msColors,
   breakPoints,
   padding,
   margin
} from './themes/defaultTheme';

export type IColors = typeof colors;

export type IFontFamilys = typeof fontFamilies;

export type IMsColors = typeof msColors;

export type IBreakPoints = typeof breakPoints;

export type IPadding = typeof padding;

export type IMargin = typeof margin;

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: IColors;
      msColors: IMsColors;
      fontFamilies: IFontFamilys;
      breakPoints: IBreakPoints;
      padding: IPadding;
      margin: IMargin
   }
}
