import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={ Home } />
      {/* <Screen name="Information" component={ undefined } /> */}
    </Navigator>
  );
}
