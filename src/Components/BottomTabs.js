import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as Common from "@Common";
import {Icon} from 'native-base';

const BottomMenu = ({ state, navigation }) => {
  const currentRoute = state.routes[state.index].name;

  // list of bottom tabs
  const FOOTER_MENU = [
    {
      icon: "home",
      typeOfIcon: "FontAwesome",
      value: "Home",
    },
    {
      icon: "contacts",
      typeOfIcon: "AntDesign",
      value: "Contact",
    },
    {
      icon: "setting",
      typeOfIcon: "AntDesign",
      value: "Settings",
    },
    {
      icon: "file-photo-o",
      typeOfIcon: "FontAwesome",
      value: "Files",
    },
  ];

  return (
    <View style={{ ...Styles.BottomMenuView }}>
      {FOOTER_MENU.map((item) => {
        return (
          <TouchableOpacity
            key={item.value}
            style={[Styles.BottomMenuTouch, currentRoute === item.value ? { backgroundColor: Common.greenColor } : {}]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate(item.value)}
          >
            <Icon
              name={item.icon}
              type={item.typeOfIcon}
              style={Styles.iconStyle}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Styles = StyleSheet.create({
  BottomMenuView: {
    height: 50,
    backgroundColor: Common.primaryColor,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  BottomMenuTouch: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: Common.primaryColor,
  },
  iconStyle: {
    color:Common.whiteColor, 
    fontSize: 25
  }
});

export default BottomMenu;
