import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {MediumText} from '../../components/TextContent/';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Profile = () => {
  return (
    <StyledSafeAreaView>
      <MediumText>MADE WITH LOVE</MediumText>
    </StyledSafeAreaView>
  );
};

export default Profile;
