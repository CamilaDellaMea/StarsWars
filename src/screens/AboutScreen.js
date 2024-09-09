import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const AboutScreen = () => {  
  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Sobre os Desenvolvedores</Text>  
      <Text>RA: 123456</Text>  
      <Text>Nome: Nome do Desenvolvedor</Text>  
      <Text>Email: email@exemplo.com</Text>  
      {/* Repita para outros desenvolvedores */}  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 20,  
  },  
  title: {  
    fontSize: 22,  
    fontWeight: 'bold',  
    marginBottom: 20,  
  },  
});  

export default AboutScreen;