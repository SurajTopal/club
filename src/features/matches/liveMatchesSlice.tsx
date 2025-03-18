import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLiveMatchesDetails = createAsyncThunk(
  'match/fetchLiveMatchesDetails',
  async (_, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const response = await axios.get(
        `http://20.40.40.110:9112/client/matches`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      
      // console.log('Response : ', response);

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

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLiveMatchesDetails.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(fetchLiveMatchesDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchLiveMatchesDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default matchSlice.reducer;
