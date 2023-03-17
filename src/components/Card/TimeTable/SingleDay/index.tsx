import React from 'react';
import {TextStyle} from 'react-native';
import styled from 'styled-components/native';
import {
  MediumText,
  WarningText,
  LightText,
  RegularText,
} from '../../../TextContent/';
import useCurrentDay from '../../../../hooks/useCurrentDay';
import {DaySchedule} from '../../../../api/OpeningHoursApi/OpeningHoursTypes';
import {formatOpeningHours} from '../../../../utils/helpers/formattedHoursHelper';
interface HeaderTitleProps {
  day: string;
  openingHours: DaySchedule[] | [];
}

const Row = styled.View`
  flex-direction: row;
  border-bottom-width: ${({theme}) => theme.space.xxxs};
  border-bottom-color: ${({theme}) => theme.colors.black[50]};
  padding-vertical: ${({theme}) => theme.space.l};
  align-items: center;
`;
const Column = styled.View`
  flex: 1;
`;

const SingleDay: React.FC<HeaderTitleProps> = ({day, openingHours}) => {
  const {isToday} = useCurrentDay(day);

  const DayStyle: TextStyle = {
    flexGrow: isToday ? 0 : 0.4,
  };

  const DateStyle: TextStyle = {
    textAlign: 'right',
  };
  const TodayWarningStyle: TextStyle = {
    flexGrow: 0.2,
    textAlign: 'left',
  };

  return (
    <Row>
      <MediumText style={DayStyle}>{day}</MediumText>
      {isToday && (
        <WarningText style={TodayWarningStyle}>{'TODAY'}</WarningText>
      )}
      <Column>
        {openingHours?.length ? (
          <RegularText style={DateStyle}>
            {formatOpeningHours(openingHours)}
          </RegularText>
        ) : (
          <LightText style={DateStyle}>{'Closed'}</LightText>
        )}
      </Column>
    </Row>
  );
};

export default SingleDay;
