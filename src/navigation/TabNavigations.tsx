import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors from '../theme/Colors';

import HomeStack from './Home/HomeStack';
import ProfileStack from './Profile/ProfileStack';

import HomeIcon from './Home/home.svg';
import ProfileIcon from './Profile/profile.svg';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarActiveTintColor: Colors.green[100],
  tabBarInactiveTintColor: Colors.black[50],
  tabBarStyle: {
    elevation: 0,
    paddingVertical: 10,
  },
  tabBarIconStyle: {
    marginBottom: 6,
  },
  headerShown: false,
};

export default () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name={'Home'}
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
