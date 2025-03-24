import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import createApi from '../../redux/api'; // Correctly import createApi

export const fetchMyMatches = createAsyncThunk(
  'myMatches/fetchMyMatches',
  async (signOut, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
  
      if (!token) {
        return thunkAPI.rejectWithValue('No auth token found');
      }

      const api = createApi(signOut); // ✅ Create an Axios instance

      api.defaults.headers.common['Authorization'] = token; // ✅ Correctly set the token

      const response = await api.get('/match/my-matches'); // ✅ Use the correct API instance

      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          `Unexpected response status: ${response.status}`,
        );
      }
    } catch (error) {
      console.log('Error fetching matches:', error?.response);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Something went wrong',
      );
    }
  },
);

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const myMatchesSlice = createSlice({
  name: 'myMatches',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMyMatches.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(fetchMyMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMyMatches.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default myMatchesSlice.reducer;
