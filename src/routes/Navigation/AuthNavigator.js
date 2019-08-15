import { createStackNavigator } from 'react-navigation';

import { AuthenticationScreen as AuthScreen } from '../../screens';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: AuthScreen,
    },
  },
  {
    headerMode: 'none',
  }
);

export default AuthNavigator;
