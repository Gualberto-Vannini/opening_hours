import React, {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import TimeTable from '../../components/Card/TimeTable';
import loadingSelectors from '../../redux/loading/loadingSelectors';
import LoadingSpinner from '../../components/LoadingSpinner/';
import {useSelector} from 'react-redux';
import {openHoursActions} from '../../redux/openingHours/openHours';
import useActions from '../../hooks/useActions';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled(SafeAreaView)`
  margin: ${({theme}) => theme.space.xl};
  flex: 1;
`;

const Home = () => {
  const [loadOpeningHours] = useActions([openHoursActions.loadOpeningHours]);

  const {isLoading: openHoursLoading} = useSelector(
    loadingSelectors.openHoursRequestState,
  );

  const loadOpenHoursData = useCallback(() => {
    loadOpeningHours();
  }, [loadOpeningHours]);

  useEffect(() => {
    loadOpenHoursData();
  }, [loadOpenHoursData]);

  if (openHoursLoading) {
    return <LoadingSpinner visible={openHoursLoading} />;
  }

  return (
    <StyledSafeAreaView>
      <TimeTable />
    </StyledSafeAreaView>
  );
};

export default Home;
