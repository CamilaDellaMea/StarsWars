import React, { useEffect, useState } from 'react';  
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';  
import { getCharacters } from '../services/swapiService';  
import CharacterCard from '../components/CharacterCard';  

const CharacterListScreen = ({ navigation }) => {  
  const [characters, setCharacters] = useState([]);  

  useEffect(() => {  
    const fetchCharacters = async () => {  
      const data = await getCharacters();  
      setCharacters(data);  
    };  
    fetchCharacters();  
  }, []);  

  return (  
    <View style={styles.container}>  
      <FlatList  
        data={characters}  
        keyExtractor={(item) => item.name}  
        renderItem={({ item }) => (  
          <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { id: item.url.split('/')[5] })}>  
            <CharacterCard character={item} />  
          </TouchableOpacity>  
        )}  
      />  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 20,  
  },  
});  

export default CharacterListScreen;