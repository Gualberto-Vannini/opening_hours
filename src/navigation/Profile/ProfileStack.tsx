import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Profile from '../../screens/Profile/';
import ProfileScreens, {ProfileStackParamList} from './Profile';

const Stack = createStackNavigator<ProfileStackParamList>();

const options = {
  animationEnabled: true,
  headerShown: false,
};

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName={ProfileScreens.INDEX}>
      <Stack.Screen
        name={ProfileScreens.INDEX}
        component={Profile}
        options={options}
      />
    </Stack.Navigator>
  );
}
export default ProfileStack;
