import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Home from '../../screens/Home/';
import HomeScreens, {HomeStackParamList} from './Home';

const Stack = createStackNavigator<HomeStackParamList>();

const options = {
  animationEnabled: true,
  headerShown: false,
};

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={HomeScreens.INDEX}>
      <Stack.Screen
        name={HomeScreens.INDEX}
        component={Home}
        options={options}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
