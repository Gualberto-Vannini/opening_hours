import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {MediumText} from '../../components/TextContent/';

const StyledSafeAreaView = styled(SafeAreaView)`
  margin: ${({theme}) => theme.space.xl};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Profile = () => {
  return (
    <StyledSafeAreaView>
      <MediumText>MADE WITH LOVE</MediumText>
    </StyledSafeAreaView>
  );
};

export default Profile;
