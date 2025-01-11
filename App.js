import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#E98E6E"
        }}>
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home-filled" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="REORDER"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="reorder" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CART"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="user-large" size={22} color={color}/>
              
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
