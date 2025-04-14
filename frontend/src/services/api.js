import axios from 'axios';

let cancelToken;

const searchAPI = async (query) => {
  // Check if there are any previous pending requests
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.");
  }

  // Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();

  try {
    // In a real app, replace this with your actual API endpoint
    const response = await axios.get(`https://api.example.com/search?q=${query}`, {
      cancelToken: cancelToken.token
    });
    
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      console.error('Search error:', error);
    }
    return [];
  }
};

export { searchAPI };