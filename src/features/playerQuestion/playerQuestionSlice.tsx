import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import createApi from '../../redux/api';

export const playerQuestionFetch = createAsyncThunk(
  'playerQuestion/playerQuestionFetch',
  async ({matchId,signOut}, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
         
     if (!token) {
       return thunkAPI.rejectWithValue('No auth token found');
     }

     const api = createApi(signOut); 

     api.defaults.headers.common['Authorization'] = token;

     const response = await api.get(`/match/${matchId}/players`);

      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          `Unexpected response status: ${response.status}`,
        );
      }
    } catch (error) {

      console.log('Error in qestion api : ',error.response,"  match ",matchId);
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

const playerQuestionSlice = createSlice({
  name: 'playerQuestion',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(playerQuestionFetch.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(playerQuestionFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(playerQuestionFetch.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default playerQuestionSlice.reducer;
