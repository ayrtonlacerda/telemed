import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { colors } from '../../styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen, SearchScreen, ProfileScreen, ScheduleScreen } from '../../screens';

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Inicio',
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: 'Pesquisar',
      },
    },
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        tabBarLabel: 'Agendamento',
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Minha conta',
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home-outline';
        }
        if (routeName === 'Search') {
          iconName = 'magnify';
        }
        if (routeName === 'Schedule') {
          iconName = 'clock-outline';
        }
        if (routeName === 'Profile') {
          iconName = 'account-outline';
        }
        // You can return any component that you like here!
        return <Icons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.PRIMARY_COLOR,
      inactiveTintColor: colors.GREY_LIGHT,
    },
  }
);

export { MainNavigator };
