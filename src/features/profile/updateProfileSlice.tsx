import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GET_BASE_URL} from '../../constant/contants';
import Toast from 'react-native-toast-message';

// Thunk for making an API call without storing data
export const updateProfileDetails = createAsyncThunk<
  void, // No data will be stored
  {
    name: string;
    mobile: string;
    email: string;
    age: number;
    location: string;
    gender: string;
  }, // Input data
  {rejectValue: string} // Rejection type
>('profile/updateProfileDetails', async (profileData, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    const {name, mobile, email, age, location, gender} = profileData;

    const response = await axios.post(
      `${GET_BASE_URL}/user/update`,
      {
        name: name,
        mobile: mobile,
        email: email,
        age: age,
        location: location,
        gender: gender,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );

    if (response.status === 200) {
      Toast.show({text1: 'Profile updated successfully!!', type: 'success'});
      console.log('Profile updated successfully:', response.data);
    } else {
      return thunkAPI.rejectWithValue(
        `Unexpected response status: ${response.status}`,
      );
    }
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Something went wrong';
    console.log('Error : ', errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

const updateProfileSlice = createSlice({
  name: 'udpateProfile',
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(updateProfileDetails.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(updateProfileDetails.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(updateProfileDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default updateProfileSlice.reducer;
