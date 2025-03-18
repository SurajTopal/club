import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLiveQuestions = createAsyncThunk(
  'match/fetchLiveQuestions',
  async (matchId, thunkAPI) => {
    console.log("Working hai ");
    try {

      const token = await AsyncStorage.getItem('authToken');
      const response = await axios.get(
        `http://20.40.40.110:3030/client/questions/${matchId}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      // console.log('Response : ', response);

      if (response.status === 200) {
        return response?.data?.data;
      } else {
        return thunkAPI.rejectWithValue(
          `Unexpected response status: ${response.status}`,
        );
      }
    } catch (error) {
        console.log("ERROR : ",error);
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

const liveMatchQuestionSlice = createSlice({
  name: 'liveQuestion',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLiveQuestions.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(fetchLiveQuestions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchLiveQuestions.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default liveMatchQuestionSlice.reducer;
