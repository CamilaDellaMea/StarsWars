import axios from 'axios';  

const API_URL = 'https://swapi.dev/api/';  

export const getCharacters = async () => {  
  const response = await axios.get(`${API_URL}people/`);  
  return response.data.results;  
};  

export const getCharacterDetails = async (id) => {  
  const response = await axios.get(`${API_URL}people/${id}/`);  
  return response.data;  
};  

export const getShips = async (ships) => {  
  const shipPromises = ships.map(ship => axios.get(ship));  
  const shipResponses = await Promise.all(shipPromises);  
  return shipResponses.map(ship => ship.data);  
};  

export const getMovies = async (films) => {  
  const filmPromises = films.map(film => axios.get(film));  
  const filmResponses = await Promise.all(filmPromises);  
  return filmResponses.map(film => film.data);  
};