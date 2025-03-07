import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export const addMoney = createAsyncThunk(
  'wallet/addMoney',
  async (addMoneyDetails, thunkAPI) => {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token : ', token);

    try {
      const response = await axios.post(
        `http://20.40.40.110:8090/add-money`,
        addMoneyDetails,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      );

      if (response.status === 200) {
        console.log('RESPONSE BALQNCE : ', response);

        Toast.show({
          text1: 'Money added successfully!',
          type: 'success',
          visibilityTime: 2000,
        });
        return response;
      } else {
        return thunkAPI.rejectWithValue(
          `Unexpected response status: ${response.status}`,
        );
      }
    } catch (error) {
      console.log('Add Money  ', error, '   ', addMoneyDetails);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Something went wrong';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
