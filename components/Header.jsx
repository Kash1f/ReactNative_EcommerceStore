import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>

      <View style={styles.appIconContainer}>
        <Image source={require("../assets/apps.png")} style={styles.appIcon}/>
        
      </View>

      <Image source={require("../assets/Ellipse2.png")} style={styles.profileIcon}/>




      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({


container : {
 
  marginTop: 50,
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
  margin:10

  },

appIconContainer : {
    backgroundColor: "#FFFFFF",
    height:44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    

},
appIcon : {
    height:28,
    width: 28,
    
},

profileIcon :{
  height: 44,
  width: 44,
  borderRadius: 22,
 
}


})