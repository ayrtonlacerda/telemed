import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { AppNavigator, NavigationService } from './routes';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </SafeAreaView>
    );
  }
}

