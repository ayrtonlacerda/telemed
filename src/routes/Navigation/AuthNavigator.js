import { createStackNavigator } from "react-navigation";

import {
  AuthScreen
} from '../../screens';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: AuthScreen
    },
  },
  {
    headerMode: "none"
  }
);

export { AuthNavigator };