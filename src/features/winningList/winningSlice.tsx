import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import createApi from '../../redux/api';

export const winningListFetch = createAsyncThunk(
  'winning/winningListFetch',
  async ({contestId, signOut}, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('authToken');

      if (!token) {
        return thunkAPI.rejectWithValue('No auth token found');
      }

      const api = createApi(signOut); // ✅ Create an Axios instance

      api.defaults.headers.common['Authorization'] = token; // ✅ Correctly set the token

      const response = await api.get(`/contest/${contestId}/tran`);

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

const winningSlice = createSlice({
  name: 'winning',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(winningListFetch.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(winningListFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(winningListFetch.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default winningSlice.reducer;
