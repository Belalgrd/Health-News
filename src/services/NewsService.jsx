import axios from 'axios';

const API_KEY = '828eaa3c06ba43d086824e26d2e2da66';
const BASE_URL = 'https://newsapi.org/v2/';

export const fetchHealthNews = async (category = 'health') => {
  try {
    // search categories he yaha pe.
    let query;
    
    if (category === 'All') {
      query = 'health';
    } else if (category === 'Nutrition') {
      query = 'nutrition OR diet OR food';
    } else if (category === 'Fitness') {
      query = 'fitness OR exercise OR workout OR sports';
    } else if (category === 'Mental Health') {
      query = 'mental health OR psychology OR mindfulness OR wellness';
    }

    const response = await axios.get(`${BASE_URL}everything?q=${query}&apiKey=${API_KEY}`);
    
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching health news:', error);
    return [];
  }
};
