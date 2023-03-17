import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum ProfileScreens {
  INDEX = 'ProfileScreens',
}

export type ProfileStackParamList = {
  [ProfileScreens.INDEX]: undefined;
};

export type ProfileScreenProps<T extends ProfileScreens> = {
  navigation: StackNavigationProp<ProfileStackParamList, T>;
  route: RouteProp<ProfileStackParamList, T>;
};

export default ProfileScreens;
