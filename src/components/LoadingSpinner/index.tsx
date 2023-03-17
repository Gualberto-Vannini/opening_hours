import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../theme/Colors';

interface LoadingSpinnerProps {
  visible?: boolean;
}

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({visible}) => {
  if (!visible) {
    return null;
  }

  return (
    <Wrapper>
      <ActivityIndicator color={Colors.black[75]} size={'large'} />
    </Wrapper>
  );
};

export default LoadingSpinner;
