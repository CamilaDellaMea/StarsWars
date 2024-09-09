import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const CharacterCard = ({ character }) => {  
  return (  
    <View style={styles.card}>  
      <Text style={styles.name}>{character.name}</Text>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  card: {  
    padding: 10,  
    borderWidth: 1,  
    marginVertical: 5,  
  },  
  name: {  
    fontSize: 18,  
  },  
});  

export default CharacterCard;