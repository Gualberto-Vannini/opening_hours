import React, {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import TimeTable from '../../components/Card/TimeTable';
import loadingSelectors from '../../redux/loading/loadingSelectors';
import LoadingSpinner from '../../components/LoadingSpinner/';
import {useDispatch, useSelector} from 'react-redux';
import {openHoursActions} from '../../redux/openingHours/openHours';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Home = () => {
  const dispatch = useDispatch();

  const {isLoading: openHoursLoading} = useSelector(
    loadingSelectors.openHoursRequestState,
  );

  const memoizedDispatch = useCallback(async () => {
    dispatch(openHoursActions.loadOpeningHours());
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

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
