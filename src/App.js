import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { AppNavigator, NavigationService } from './routes';

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
