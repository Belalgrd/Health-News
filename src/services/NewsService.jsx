import axios from 'axios';

const API_KEY = '3f83d3e35f49d290d7ee2eb424e42295';
const BASE_URL = 'https://gnews.io/api/v4/';

export const fetchHealthNews = async (category = 'health') => {
  try {
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

    const response = await axios.get(`${BASE_URL}search?q=${query}&token=${API_KEY}`);
    
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching health news:', error);
    return [];
  }
};