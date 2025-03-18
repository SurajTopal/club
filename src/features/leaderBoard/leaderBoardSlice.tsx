import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLeaderBoard = createAsyncThunk(
  'leaderboard/fetchLeaderBoard',
  async (_, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const response = await axios.get(
        `http://20.40.40.110:9117/leaderboard/getLeaderboard?contestId=a88a600f-e5c9-4d1e-af9d-443fffc7a712`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      console.log('Response : leaderBoard ', response);

      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          `Unexpected response status: ${response.status}`,
        );
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Something went wrong';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const leaderBoardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLeaderBoard.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(fetchLeaderBoard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchLeaderBoard.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default leaderBoardSlice.reducer;
