import React from 'react';
import {View} from 'react-native';
import Card from '../';
import {cardShadow} from '../../../theme/Shadow';
import HeaderTitle from '../HeaderTItle/';
import {
  IMAGE_HEADER_HELPER_TYPE,
  TEXT_HEADER_HELPER_TYPE,
} from '../HeaderTItle/headerHelper';
import SingleDay from './SingleDay';
import openHoursSelectors from '../../../redux/openingHours/openHoursSelector';
import {useSelector} from 'react-redux';

const TimeTable = () => {
  const openHours = useSelector(openHoursSelectors.openHours);

  return (
    <View>
      <Card style={cardShadow}>
        <HeaderTitle
          title={TEXT_HEADER_HELPER_TYPE.OPENING_HOURS}
          imageRequest={IMAGE_HEADER_HELPER_TYPE.CLOCK}
        />
        <SingleDay
          key="monday"
          day={'Monday'}
          openingHours={openHours.monday}
        />
        <SingleDay
          key="tuesday"
          day={'Tuesday'}
          openingHours={openHours.tuesday}
        />
        <SingleDay
          key="wednesday"
          day={'Wednesday'}
          openingHours={openHours?.wednesday}
        />
        <SingleDay
          key="thursday"
          day={'Thursday'}
          openingHours={openHours.thursday}
        />
        <SingleDay
          key="friday"
          day={'Friday'}
          openingHours={openHours.friday}
        />
        <SingleDay
          key="saturday"
          day={'Saturday'}
          openingHours={openHours.saturday}
        />
        <SingleDay
          key="sunday"
          day={'Sunday'}
          openingHours={openHours.sunday}
        />
      </Card>
    </View>
  );
};

export default TimeTable;
