import React, {Component} from 'react';
import {Root} from 'native-base';
import AppNavigator from './Screens';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}
