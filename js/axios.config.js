const instance = axios.create({
  baseURL: 'http://localhost:3000', // Set a base URL for all requests
  timeout: 5000, // Set a default timeout for all requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set default headers for all requests
  },
});
export default instance;