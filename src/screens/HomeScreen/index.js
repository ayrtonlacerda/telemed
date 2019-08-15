// full component
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { colors } from '../../styles';
import { Container, MainContainer, ImageContainer, SearchContainer } from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.SECONDARY_COLOR} barStyle='light-content' />
        <MainContainer>
          <ImageContainer>
            <SearchContainer />
          </ImageContainer>
        </MainContainer>
      </Container>
    );
  }
}

export default HomeScreen;
