import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Header from "../components/Header";
import StackRoute from "./stack.route";

export default function Routes() {
  return (
    <NavigationContainer>
      <Header />
      <StackRoute />
    </NavigationContainer>
  );
}