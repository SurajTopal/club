import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

// Thunk for making an API call without storing data
export const addOrderDetails = createAsyncThunk<
  void, // No data will be stored
  {
    questionId: String;
    price: Number;
    side: String;
    orderType: String;
    quantity: Number;
    stopPrice: Number;
    bookProfilePrice: Number;
    navigation: any;
  }, // Input data
  {rejectValue: string} // Rejection type
>('addOrder/addOrderDetails', async (orderDetails, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem('authToken');

    const {
      questionId,
      price,
      side,
      orderType,
      quantity,
      stopPrice,
      bookProfilePrice,
      navigation,
    } = orderDetails;

    const dataForm = {
      QuestionID: String(questionId),
      Price: Number(price),
      Side: String(side),
      OrderType: String(orderType),
      Quantity: Number(quantity),
      StopPrice: Number(stopPrice),
      BookProfitPrice: Number(bookProfilePrice),
    };

    const response = await axios.post(
      `http://20.40.40.110:9000/addOrder`,
      dataForm,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );

    if (response.status === 200) {
      Toast.show({
        text1: 'Order Placed successfully!!',
        type: 'success',
        visibilityTime: 2000,
      });
      console.log('Order Created successfully:', response);
      navigation.goBack();
    } else {
      return thunkAPI.rejectWithValue(
        `Unexpected response status: ${response.status}`,
      );
    }
  } catch (error: any) {
    console.log('ERORR ROR ', error);
    const errorMessage =
      error.response?.data?.message || error.message || 'Something went wrong';
    console.log('Error : ', errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

const addOrderSlice = createSlice({
  name: 'addOrder',
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addOrderDetails.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(addOrderDetails.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(addOrderDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'An unknown error occurred';
    });
  },
});

export default addOrderSlice.reducer;
