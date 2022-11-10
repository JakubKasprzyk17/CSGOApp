import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BettingScreen from "../screens/BettingScreen";
import MatchScreen from "../screens/MatchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../utils/color";
import { Sizes } from "../utils/size";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
          opacity: 0.95,
        },
        tabBarInactiveTintColor: Colors.grey,
        tabBarActiveTintColor: Colors.white,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home-sharp"
              size={
                color == Colors.grey
                  ? Sizes.TabIconInactive
                  : Sizes.TabIconActive
              }
              color={color}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="BettingScreen"
        component={BettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="ticket"
              size={
                color == Colors.grey
                  ? Sizes.TabIconInactive
                  : Sizes.TabIconActive
              }
              color={color}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="MatchScreen"
        component={MatchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="compass"
              size={
                color == Colors.grey
                  ? Sizes.TabIconInactive
                  : Sizes.TabIconActive
              }
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="settings"
              size={
                color == Colors.grey
                  ? Sizes.TabIconInactive
                  : Sizes.TabIconActive
              }
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
