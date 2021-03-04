import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Header from '@Components/Header';
import * as Common from '@Common';

const Settings = () => {
  return (
    <View style={Styles.container}>
      <Header/>
      <View style={Styles.bodyWrapper}>
        <Text>Settings Screen</Text>
      </View>
    </View>
  );
}

export default Settings;

const Styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: Common.whiteColor,
},
bodyWrapper: {
  flex: 9,
  backgroundColor: Common.whiteColor,
  padding: 10,
}
})