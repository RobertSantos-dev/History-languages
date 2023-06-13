import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabRoute from "./tab.route";
import Details from "../screens/Details";

const { Navigator, Screen } = createStackNavigator();

export default function StackRoute() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={ TabRoute } />
      <Screen name="Details" component={ Details } />
    </Navigator>
  );
}
