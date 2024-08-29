import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlightsIcon, ProfileIcon, PlansIcon } from "./components/TabBarIcons"; // Adjust the path as needed
import PlansScreen from "./pages/Plans/PlansMain";
import ProfileScreen from "./pages/Profile/ProfileMain";
import FlightsScreen from "./pages/Flights/FlightsMain";
import { useFonts } from "expo-font";
import { Text, View, ActivityIndicator } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Flights" // Set the initial tab to Flights
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let IconComponent;

            if (route.name === "Flights") {
              IconComponent = FlightsIcon;
            } else if (route.name === "Profile") {
              IconComponent = ProfileIcon;
            } else if (route.name === "Plans") {
              IconComponent = PlansIcon;
            }

            // Pass the color prop to the icon
            return <IconComponent size={size} color={color} />;
          },
          tabBarActiveTintColor: "#111827", // Color when the tab is focused
          tabBarInactiveTintColor: "#6B7280", // Color when the tab is not focused

          headerShown: false,
        })}
      >
        <Tab.Screen name="Plans" component={PlansScreen} />
        <Tab.Screen name="Flights" component={FlightsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
