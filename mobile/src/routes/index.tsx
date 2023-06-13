import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabRoute from "./tab.route";
// import StackRoute from "./stack.route";

export default function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoute /> */}
      <TabRoute />
    </NavigationContainer>
  );
}