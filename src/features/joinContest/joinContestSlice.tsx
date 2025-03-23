import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import Toast from 'react-native-toast-message';

// Thunk for making an API call without storing data
export const joinContest = createAsyncThunk<
  void, // No data will be stored
  {rejectValue: string} // Rejection type
>('join/joinContest', async ({formatData, navigation}, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem('authToken');

    const response = await axios.post(
      `http://20.40.40.110:9117/contest/register`,
      formatData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );

    console.log('Respone>-----Join Contest ------', response);

    if (response.status === 201) {
      Toast.show({
        text1: 'Contest has been join successfully!!',
        type: 'success',
        visibilityTime: 2000,
      });

        navigation.navigate('Home');
    } else {
      return thunkAPI.rejectWithValue(
        `Unexpected response status: ${response.status}`,
      );
    }
  } catch (error: any) {
    Toast.show({text1: error.response?.data.error, type: 'error'});
    console.log('ERORR ROR Join Contest--', error.response);
    const errorMessage =
      error.response?.data?.message || error.message || 'Something went wrong';
    console.log('\n\nError : ', errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
