import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../features/profile/profileSlice';
import matchReducer from '../features/matches/liveMatchesSlice';
export const store = configureStore({
  reducer: {
    profile: profileReducer,
    counter: counterReducer,
    match: matchReducer,
  },
});

//Steps :
// 1. create store
// 2. wrap app component under provider
// 3. create slice
// 4. Register reducer in store
