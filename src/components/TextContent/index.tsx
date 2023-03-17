import * as React from 'react';
import {StyleProp, TextProps} from 'react-native';
import styled from 'styled-components/native';
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  color,
  layout,
  space,
  typography,
} from 'styled-system';

import colors from '../../theme/Colors';

export interface StyledTextProps
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    LayoutProps {
  children: React.ReactNode;
  style?: StyleProp<TextProps>;
}

//README
// We have the following types of texts cases:
// Main Text
// Light Text
// Medium Text
// WArning Text
// ....Include here new text cases

// =======> Main Title
export const StyledMainText = styled.Text<StyledTextProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

export const MainText: React.FC<StyledTextProps> = ({children, ...props}) => (
  <StyledMainText
    fontFamily={'bold'}
    fontSize="xl"
    color={colors.black[100]}
    {...props}>
    {children}
  </StyledMainText>
);

// =======> Light content
export const StyledLightText = styled.Text<StyledTextProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

export const LightText: React.FC<StyledTextProps> = ({children, ...props}) => (
  <StyledLightText
    fontFamily={'regular'}
    fontSize="m"
    color={colors.black[75]}
    {...props}>
    {children}
  </StyledLightText>
);
// =======> Light content
export const StyledRegularText = styled.Text<StyledTextProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

export const RegularText: React.FC<StyledTextProps> = ({
  children,
  ...props
}) => (
  <StyledRegularText
    fontFamily={'regular'}
    fontSize="m"
    color={colors.black[100]}
    {...props}>
    {children}
  </StyledRegularText>
);

// =======> Medium content
export const StyledMediumText = styled.Text<StyledTextProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

export const MediumText: React.FC<StyledTextProps> = ({children, ...props}) => (
  <StyledMediumText
    fontFamily={'medium'}
    fontSize="m"
    color={colors.black[100]}
    {...props}>
    {children}
  </StyledMediumText>
);

// =======> Error case
export const StyledWarningText = styled.Text<StyledTextProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

export const WarningText: React.FC<StyledTextProps> = ({
  children,
  ...props
}) => (
  <StyledWarningText
    fontFamily={'bold'}
    fontSize="s"
    ml="s"
    {...props}
    color={colors.green[100]}>
    {children}
  </StyledWarningText>
);
