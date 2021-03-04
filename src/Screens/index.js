import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef } from "@Common/Helpers";
import BottomMenu from "@Components/BottomTabs";

/**
 * list of all screens
 */
import Home from './Home';
import Contacs from "./Contacs";
import Settings from "./Settings";
import Files from "./Files";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

/**
 * defining tab navigation
 */
const Tabs = () => (
  <Tab.Navigator tabBar={(props) => <BottomMenu {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Contact" component={Contacs} />
    <Tab.Screen name="Settings" component={Settings} />
    <Tab.Screen name="Files" component={Files} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
