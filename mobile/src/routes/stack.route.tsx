import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabRoute from "./tab.route";
import Details from "../screens/Details";

const { Navigator, Screen } = createStackNavigator();

export default function StackRoute() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {
        borderBottomLeftRadius: 40,
        borderBottomEndRadius: 40,
        backgroundColor: '#5BC0BE',
        height: 100,
      },
      headerTitleAlign: 'center',
      headerBackgroundContainerStyle: { backgroundColor: '#0B132B' },
      headerTitle: 'Historia das Linguagens',
    }}>
      <Screen name="Home" component={ TabRoute } />
      <Screen name="Details" component={ Details } />
    </Navigator>
  );
}
