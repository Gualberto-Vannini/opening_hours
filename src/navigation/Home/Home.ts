import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum HomeScreens {
  INDEX = 'HomeScreen',
}

export type HomeStackParamList = {
  [HomeScreens.INDEX]: undefined;
};

export type HomeScreenProps<T extends HomeScreens> = {
  navigation: StackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

export default HomeScreens;
