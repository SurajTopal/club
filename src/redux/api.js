import axios from 'axios';
import config from '../../config';

const createApi = signOut => {
  const api = axios.create({
    baseURL: config?.MATCH_BASE_URL,
    timeout: 10000, // 10 sec timeout
  });

  api.interceptors.response.use(
    async function (response) {
      return response; // Return response if successful
    },
    async function (error) {
      const res = error.response;
      if (res?.status === 401) {
                signOut(); // Call the signOut function from context
      }

      return Promise.reject(error);
    },
  );

  return api;
};

export default createApi;
