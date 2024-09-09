import React, { useEffect, useState } from 'react';  
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';  
import { getCharacterDetails, getShips, getMovies } from '../services/swapiService';  

const CharacterDetailScreen = ({ route, navigation }) => {  
  const { id } = route.params;  
  const [character, setCharacter] = useState(null);  
  const [ships, setShips] = useState([]);  
  const [movies, setMovies] = useState([]);  

  useEffect(() => {  
    const fetchCharacterDetails = async () => {  
      const data = await getCharacterDetails(id);  
      setCharacter(data);  
      const shipsData = await getShips(data.starships);  
      setShips(shipsData);  
      const moviesData = await getMovies(data.films);  
      setMovies(moviesData);  
    };  
    fetchCharacterDetails();  
  }, [id]);  

  if (!character) return null;  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>{character.name}</Text>  
      <Text>Height: {character.height}</Text>  
      <Text>Weight: {character.mass}</Text>  
      <Text>Hair Color: {character.hair_color}</Text>  
      <Text>Skin Color: {character.skin_color}</Text>  
      <Text>Eye Color: {character.eye_color}</Text>  
      <Text>Gender: {character.gender}</Text>  
      <View style={styles.buttonContainer}>  
        <TouchableOpacity   
          style={[styles.button, styles.shipsButton]}   
          onPress={() => navigation.navigate('Ships', { ships })}>  
          <Text style={styles.buttonText}>Ships</Text>  
        </TouchableOpacity>  
        <TouchableOpacity   
          style={[styles.button, styles.moviesButton]}   
          onPress={() => navigation.navigate('Movies', { movies })}>  
          <Text style={styles.buttonText}>Movies</Text>  
        </TouchableOpacity>  
      </View>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 20,  
  },  
  title: {  
    fontSize: 24,  
    fontWeight: 'bold',  
  },  
  buttonContainer: {  
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    marginTop: 20,  
  },  
  button: {  
    flex: 1,  
    padding: 15,  
    borderRadius: 5,  
    marginHorizontal: 5,  
    alignItems: 'center',  
  },  
  shipsButton: {  
    backgroundColor: '#1E90FF', 
  },  
  moviesButton: {  
    backgroundColor: '#00BFFF', 
  },  
  buttonText: {  
    color: '#FFFFFF',  
    fontWeight: 'bold',  
  },  
});  

export default CharacterDetailScreen;