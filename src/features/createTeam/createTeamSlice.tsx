import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import Toast from 'react-native-toast-message';

// Thunk for making an API call without storing data
export const createTeam = createAsyncThunk<
  void, // No data will be stored
  {rejectValue: string} // Rejection type
>(
  'teamCreation/createTeam',
  async ({formatData, navigation, isNavigation = false, signOut}, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('authToken');

      const response = await axios.post(
        `http://20.40.40.110:9117/team/user/createTeam`,
        formatData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      );

      if (response?.status === 401) {
        signOut();
      }

      if (response.status === 201) {
        Toast.show({
          text1: 'Team has been created Successfully!!',
          type: 'success',
          visibilityTime: 2000,
        });

        if (isNavigation) navigation.navigate('Home');
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          `Unexpected response status: ${response.status}`,
        );
      }
    } catch (error: any) {
      console.log('ERORR ROR response walalalllalallal', error.response);

      Toast.show({text1: error.response?.data?.message, type: 'error'});

      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Something went wrong';
      console.log('Error : ', errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
