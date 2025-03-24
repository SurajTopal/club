import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchWalletBalance = createAsyncThunk(
  'wallet/fetchWalletBalance',
  async (signOut, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('authToken');

      const response = await axios.get(
        `http://20.40.40.110:8090/wallet/getBalance`,
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
       
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          `Unexpected response status: ${response.status}`,
        );
      }
    } catch (error) {
      console.log('cfetch valance ', error);
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

const walletBalanceSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWalletBalance.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(fetchWalletBalance.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchWalletBalance.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default walletBalanceSlice.reducer;
