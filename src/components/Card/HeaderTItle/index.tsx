import React from 'react';
import styled from 'styled-components/native';
import {MainText} from '../../TextContent';
import {
  TEXT_HEADER_HELPER_TYPE,
  IMAGE_HEADER_HELPER_TYPE,
} from './headerHelper';

interface HeaderTitleProps {
  title: TEXT_HEADER_HELPER_TYPE;
  imageRequest: IMAGE_HEADER_HELPER_TYPE;
}

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${({theme}) => theme.space.xxxs};
  border-bottom-color: ${({theme}) => theme.colors.black[100]};
  padding-bottom: ${({theme}) => theme.space.l};
`;

const ImageStyle = styled.Image`
  width: ${({theme}) => theme.space.xl};
  height: ${({theme}) => theme.space.xl};
  margin-right: ${({theme}) => theme.space.s};
`;

const HeaderTitle: React.FC<HeaderTitleProps> = ({title, imageRequest}) => {
  return (
    <Row>
      <ImageStyle source={imageRequest} />
      <MainText>{title}</MainText>
    </Row>
  );
};

export default HeaderTitle;
