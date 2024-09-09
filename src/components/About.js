import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const AboutScreen = () => {  
  return (  
    <View style={styles.container}>  
      <Text>Desenvolvedores:</Text>  
      <Text>RA: 1118927 | 1135486 </Text>  
      <Text>Nome: Camila Della Méa | Luis Henrique Trichez </Text>  
      <Text>Email: 1118927@atitus.edu.br | 1135486@atitus.edu.br</Text>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 20,  
  },  
});  

export default AboutScreen;