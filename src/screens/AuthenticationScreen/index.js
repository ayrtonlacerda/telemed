import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import {
  Contain,
  ContainImage,
  ImageLogo,
  Main,
  Text,
} from './styles';
import {
  TopTabsMenu,
} from '../../components';
import { Imgs } from '../../assets';
import { Login } from './LoginScreen';
import { Register } from './RegisterScreen';

class AuthScreen extends Component {
  state = {
    viewLogin: true,
  }

  render() {
    const { viewLogin } = this.state;
    return (
      <ScrollView centerContent showsHorizontalScrollIndicator={false}>
        <Contain>          
            <ContainImage>
              <ImageLogo source={Imgs.LogoGreen} resizeMode="contain" />
              {
                viewLogin
                  ? <Text>Entre com seu e-mail e senha</Text>
                  : <Text>Registre-se na Arquimed é rapido e gratuito</Text>
              }
              
            </ContainImage>
            <Main>
              <TopTabsMenu 
                active={viewLogin}
                onPressFunc={() => this.setState({ viewLogin: !viewLogin })}
              />
              {
                viewLogin
                  ? <Login />
                  : <Register />
              }          
            </Main>                
        </Contain>
      </ScrollView> 
    );
  }
}

export { AuthScreen };
