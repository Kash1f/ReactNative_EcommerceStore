import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";

export default function App() {
  return (

   
    // Background Linear Gradient
    <LinearGradient style={styles.container} colors={["#FDF0F3", "#FFFBFC"]}>
      <Header/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'orange',
  },
  //   background: {
  //     position: 'absolute',
  //     left: 0,
  //     right: 0,
  //     top: 0,
  //     height: 300,
  //   },
  //   button: {
  //     padding: 15,
  //     alignItems: 'center',
  //     borderRadius: 5,
  //   },
  //   text: {
  //     backgroundColor: 'transparent',
  //     fontSize: 15,
  //     color: '#fff',
  //   },
});
