import React from 'react';
import {View, ViewProps, StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  ShadowProps,
  border,
  color,
  compose,
  flexbox,
  layout,
  space,
} from 'styled-system';

interface CardProps
  extends ViewProps,
    ColorProps,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    ShadowProps,
    SpaceProps {
  style?: StyleProp<ViewStyle>;
}

const Container = styled(View)<CardProps>`
  background-color: #ffffff;
  padding: ${({theme}) => theme.space.xxxl};
  border-radius: 10px;
  ${compose(space, flexbox, layout, color, border)};
  width: 350px;
`;

const Card: React.FC<CardProps> = ({children, ...restOfProps}) => (
  <Container {...restOfProps}>{children}</Container>
);

export default Card;
