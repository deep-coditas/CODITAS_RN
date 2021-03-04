import React from 'react';
import {Header, Icon} from 'native-base';
import {TouchableOpacity, TextInput, View} from 'react-native';
import Styles from './Styles';

/**
 * common Header component
 * has common search bar and notification icon
*/
export default function HeaderCompo() {
  return (
    <Header style={Styles.headerWrapper}>
      <View style={Styles.headerWrapperView}>
        <View style={Styles.headerMiddleWrapper}>
          <TextInput
            style={Styles.headerTextInput}
            placeholder="Search by location"
          />
          <Icon name="location" type="EvilIcons" style={Styles.locationIcon} />
        </View>
        <View style={Styles.rightBtnWrapper}>
          <TouchableOpacity style={{padding: 3}}>
            <Icon
              name="notifications-none"
              type="MaterialIcons"
              style={Styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Header>
  );
}
