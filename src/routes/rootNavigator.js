import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AuthNavigator } from './Navigation/AuthNavigator';
import { MainNavigator } from './Navigation/MainNavigator';
// navigator padrao de modulos
const Navigator = createSwitchNavigator(
  {
    AuthNavigator, // todas as rotas padrão do modulo Auth
    MainNavigator,
  },
  {
    initialRouteName: 'MainNavigator',
  }
)
export const AppNavigator = createAppContainer(Navigator);