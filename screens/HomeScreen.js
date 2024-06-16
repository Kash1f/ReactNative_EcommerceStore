import * as React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (

    // Background Linear Gradient
    <LinearGradient style={styles.container} colors={["#FDF0F3", "#FFFBFC"]}>
      <Header/>

      <Text style={styles.textOne}>Match Your Style</Text>

      {/* Search Box */}

      <View style={styles.inputContainer}>
      <AntDesign style={styles.icon} name="search1" size={24} color="#C0C0C0" />
      <TextInput placeholder="Search" style={styles.searchBox}/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textOne : {
    fontSize: 28,
    color: "#000000",
    marginTop: 20
  },
  inputContainer :{
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20
  },
  icon : {
    marginHorizontal: 5
  },

  searchBox : {
    marginLeft:20,
    fontSize:16
    
    // borderWidth: 1,
    // borderColor: 'black'
    }
  
});
