import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    // main container
    <View style={styles.container}>
      
      {/* icon container with image*/}
      <View style={styles.appIconContainer}>
        <Image source={require("../assets/apps.png")} style={styles.appIcon} />
      </View>

      {/* display picture view */}
      <View>
        <Image
          source={require("../assets/Ellipse2.png")}
          style={styles.profileIcon}/>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },

  appIconContainer: {
    backgroundColor: "#FFFFFF",
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
  appIcon: {
    height: 28,
    width: 28,
  },

  profileIcon: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});
