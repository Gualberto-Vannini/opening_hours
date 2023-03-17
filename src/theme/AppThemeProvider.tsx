import React, {useEffect, useState} from 'react';
import {DefaultTheme, ThemeProvider} from 'styled-components/native';

import {IFontGroup, fontMap} from './Typography';

interface AppThemeProviderProps {
  theme: Omit<DefaultTheme, 'fonts'>;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  theme,
  children,
}) => {
  const fonts = fontMap;
  const [appTheme, setAppTheme] = useState<DefaultTheme & {fonts: IFontGroup}>({
    ...theme,
    fonts,
  });

  useEffect(() => {
    // Update theme fonts when fontMapKey changes
    setAppTheme({...theme, fonts});
  }, [fonts, theme]);

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
