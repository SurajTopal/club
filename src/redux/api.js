import axios from 'axios';

const createApi = signOut => {
  const api = axios.create({
    baseURL: 'http://20.40.40.110:9117',
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
