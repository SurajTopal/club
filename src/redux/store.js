import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../features/profile/profileSlice';
export const store = configureStore({
  reducer: {
    profile: profileReducer,
    counter: counterReducer,
  },
});

//Steps :
// 1. create store
// 2. wrap app component under provider
// 3. create slice
// 4. Register reducer in store
