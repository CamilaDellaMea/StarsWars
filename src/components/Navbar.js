import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const Navbar = () => {  
  return (  
    <View style={styles.navbar}>  
      <Text style={styles.title}>Star Wars App</Text>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  navbar: {  
    height: 60,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#000',  
  },  
  title: {  
    color: '#fff',  
    fontSize: 20,  
  },  
});  

export default Navbar;