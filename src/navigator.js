import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ProfileDetail from "./screens/ProfileDetail";
import Profile from "./screens/Profile";
import Page from "./screens/Page";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page" component={Page} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
