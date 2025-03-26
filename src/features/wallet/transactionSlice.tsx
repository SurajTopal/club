import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config';

export const fetchTransaction = createAsyncThunk(
  'wallet/fetchTransaction',
  async ({signOut}, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('authToken');

      const response = await axios.get(
        `${config.WALLET_BASE_URL}/transactions?page=1`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      if (response.status === 401) {
        signOut();
      }

      if (response.status === 200) {
        console.log('History : ', response);
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          `Unexpected response status: ${response.status}`,
        );
      }
    } catch (error) {
      console.log('error in fetch transaction ', error);
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

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTransaction.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(fetchTransaction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default transactionSlice.reducer;
