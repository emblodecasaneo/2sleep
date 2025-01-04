import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepteur simple pour le logging
instance.interceptors.request.use(
  config => {
    console.log('Requête envoyée:', config);
    return config;
  },
  error => {
    console.error('Erreur de requête:', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    console.log('Réponse reçue:', response);
    return response;
  },
  error => {
    console.error('Erreur:', error);
    return Promise.reject(error);
  }
);

export default instance; 