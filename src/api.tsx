import axios from 'axios';

const createApi = () => {
  const api = axios.create({
    baseURL: `http://localhost:3000`,
    timeout: 5000,
    withCredentials: true
  });

  return api;
}

export {createApi};