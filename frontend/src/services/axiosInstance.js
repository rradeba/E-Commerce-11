import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173',  // URL of your Flask backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
