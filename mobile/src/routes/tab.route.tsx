import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Information from "../screens/Information";
// import Header from "../components/Header";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoute() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#6FFFE9',
      tabBarInactiveTintColor: '#827f7f',
      tabBarActiveBackgroundColor: '#1C2541',
      tabBarInactiveBackgroundColor: '#1C2541',
    }}>
      <Screen name="Languages" component={ Home } />
      <Screen name="Information" component={ Information } />
    </Navigator>
  );
}
