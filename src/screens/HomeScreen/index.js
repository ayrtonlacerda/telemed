// full component
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../../styles';

import {
  Container,
  MainContainer,
  ImageContainer,
} from './styles';

class HomeScreen extends Component {
  state = {}

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.SECONDARY_COLOR} barStyle="light-content" />
        <MainContainer>
          <ImageContainer>
            <SearchContainer></SearchContainer>
          </ImageContainer>
        </MainContainer>
      </Container>
    );
  }
}

export { HomeScreen };