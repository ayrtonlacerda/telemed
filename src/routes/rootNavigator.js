import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AuthNavigator } from './Navigation/AuthNavigator';
// navigator padrao de modulos
const Navigator = createSwitchNavigator(
  {
    AuthNavigator, // todas as rotas padrão do modulo Auth    
  },
  {
    //initialRouteName: 'AuthNavigator',
  }
)
export const AppNavigator = createAppContainer(Navigator);