import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import axios from 'axios';


// Thunk for making an API call without storing data
export const createProfile = createAsyncThunk<
  void, // No data will be stored
  {rejectValue: string} // Rejection type
>('teamCreation/createProfile', async (formatData, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem('authToken');

    const response = await axios.post(
      `http://20.40.40.110:9111/createPriofile`,
      formatData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );

    if (response.status === 201) {
      Toast.show({
        text1: 'User profile created Successfully!!',
        type: 'success',
        visibilityTime: 2000,
      });

      return response.data;
    } else {
      return thunkAPI.rejectWithValue(
        `Unexpected response status: ${response.status}`,
      );
    }
  } catch (error: any) {
    console.log('Error in create your profile', error.response);

    Toast.show({text1: error.response?.data?.message, type: 'error'});

    const errorMessage =
      error.response?.data?.message || error.message || 'Something went wrong';
    console.log('Error : ', errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
