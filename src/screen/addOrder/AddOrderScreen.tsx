import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addOrderDetails} from '../../features/addOrder/addOrderSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {AppColors} from '../../theme';

import {styles} from './addOrderScreen-styles';

export default function AddOrderScreen(props) {
  const {
    route: {
      params: {questionDetails},
    },
  } = props;

  console.log('Question Details : ', questionDetails);

  const dispatch = useDispatch();
  const {Question, QuestionId, slide} = questionDetails;
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [connected, setConnected] = useState(false);
  const [yesPrice, setYesPrice] = useState(null);
  const [noPrice, setNoPrice] = useState(null);
  const websocketRef = useRef(null);
  const scrollViewRef = useRef(null);

  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation();

  const connectWebSocket = async () => {
    const token = await AsyncStorage.getItem('authToken');

    try {
      // Create WebSocket instance with custom headers
      const ws = new WebSocket(
        `ws://20.40.40.110:9000/ws?questionId=${QuestionId}`,
        [],
        {
          headers: {
            Authorization: `${token}`,
          },
        },
      );

      // Connection opened
      ws.onopen = () => {
        console.log('WebSocket Connection Established');
        setConnected(true);
        setConnectionStatus('Connected');
        // setMessages(prev => [
        //   ...prev,
        //   {text: 'Connected to server', type: 'system'},
        // ]);
      };

      // Listen for messages
      ws.onmessage = event => {
        console.log('Message received:', JSON.parse(event.data));

        if (event.data) {
          const questionInfo = JSON.parse(event.data);

          console.log('Yes and no ...', questionInfo);

          setYesPrice(questionInfo?.yesPrice);
          setNoPrice(questionInfo?.noPrice);
          // console.log('questionINFOOOO--------', questionInfo);
        }
        // setMessages(prev => [...prev, {text: event.data, type: 'received'}]);
      };

      // Listen for errors
      ws.onerror = error => {
        console.log('WebSocket Error:', error);
        setConnectionStatus(`Error: ${error.message || 'Unknown error'}`);
        // setMessages(prev => [
        //   ...prev,
        //   {text: `Error: ${error.message || 'Unknown error'}`, type: 'error'},
        // ]);
      };

      // Connection closed
      ws.onclose = event => {
        console.log('WebSocket Connection Closed:', event.code, event.reason);
        setConnected(false);
        setConnectionStatus(
          `Disconnected: ${event.reason || 'Connection closed'}`,
        );
        // setMessages(prev => [
        //   ...prev,
        //   {
        //     text: `Disconnected: ${event.reason || 'Connection closed'}`,
        //     type: 'system',
        //   },
        // ]);
      };

      websocketRef.current = ws;
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
      setConnectionStatus(`Connection Failed: ${error.message}`);
      // setMessages(prev => [
      //   ...prev,
      //   {text: `Connection Failed: ${error.message}`, type: 'error'},
      // ]);
    }
  };

  const [price, setPrice] = useState(0.5);
  const minPrice = 0.5;
  const maxPrice = 9.5;
  const priceStep = 0.5;

  // Quantity State
  const [quantity, setQuantity] = useState(1);
  const minQuantity = 1;
  const maxQuantity = 10000;
  const quantityStep = 1;

  const setCurrentPrice = option => {
    if (option === 'Yes') {
      console.log('YES PRICE ', yesPrice);
      setPrice(yesPrice);
      setSelectedButton('Yes');
    } else {
      setPrice(noPrice);
      setSelectedButton('No');
    }
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (websocketRef.current) {
        console.log('Closing WebSocket connection...');
        websocketRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    setCurrentPrice(slide);
  }, [yesPrice, noPrice]);

  // Handle Price Increment
  const increasePrice = () => {
    if (price < maxPrice) setPrice(prev => prev + priceStep);
  };

  // Handle Price Decrement
  const decreasePrice = () => {
    if (price > minPrice) setPrice(prev => prev - priceStep);
  };

  // Handle Quantity Increment
  const increaseQuantity = () => {
    if (quantity < maxQuantity) setQuantity(prev => prev + quantityStep);
  };

  // Handle Quantity Decrement
  const decreaseQuantity = () => {
    if (quantity > minQuantity) setQuantity(prev => prev - quantityStep);
  };

  // Handle Quantity by Amount
  const increaseQuantityByAmount = (amount: number) => {
    if (quantity + amount < maxQuantity) {
      setQuantity(prev => prev + amount);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{Question}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setCurrentPrice('Yes')}
            style={[
              styles.greenButton,
              selectedButton !== 'Yes' && {
                backgroundColor: AppColors.palette.zircon,
              },
            ]}>
            <Text
              style={[
                styles.buttonTitle,
                selectedButton !== 'Yes' && styles.blackButtonTitle,
              ]}>
              Yes ₹{yesPrice}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.redButton,
              selectedButton !== 'No' && {
                backgroundColor: AppColors.palette.zircon,
              },
            ]}
            onPress={() => setCurrentPrice('No')}>
            <Text
              style={[
                styles.buttonTitle,
                selectedButton !== 'No' && styles.blackButtonTitle,
              ]}>
              No ₹{noPrice}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.middleContainer}>
          <View style={styles.putGetContainer}>
            <View style={styles.putGetSubContainer}>
              <Text style={styles.putGetText}>You Put</Text>
              <Text style={styles.putAmount}>₹{price}</Text>
            </View>
            <View style={styles.putGetSubContainer}>
              <Text style={styles.putGetText}>You Get</Text>
              <Text style={styles.getAmount}>₹10.00</Text>
            </View>
          </View>
          <View style={styles.selectPriceContainer}>
            <Text style={styles.selectPriceText}>Select Price</Text>
            <Text style={styles.selectPriceText}>₹{price?.toFixed(1)}</Text>
          </View>

          <View style={styles.controlContainer}>
            <TouchableOpacity onPress={decreasePrice} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Slider
              style={styles.slider}
              minimumValue={minPrice}
              maximumValue={maxPrice}
              step={priceStep}
              value={price}
              onValueChange={setPrice}
              minimumTrackTintColor={AppColors.palette.greenBlue}
              maximumTrackTintColor={AppColors.palette.greenWhite}
              thumbTintColor={AppColors.palette.greenBlue}
            />
            <TouchableOpacity onPress={increasePrice} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Quantity Selector */}
          <View style={styles.selectPriceContainer}>
            <Text style={styles.selectPriceText}>Select Quantity</Text>
            <Text style={styles.selectPriceText}>{quantity}</Text>
          </View>
          <View style={styles.controlContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Slider
              style={styles.slider}
              minimumValue={minQuantity}
              maximumValue={maxQuantity}
              step={quantityStep}
              value={quantity}
              onValueChange={setQuantity}
              minimumTrackTintColor={AppColors.palette.greenBlue}
              maximumTrackTintColor={AppColors.palette.greenWhite}
              thumbTintColor={AppColors.palette.greenBlue}
            />
            <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quantityButtonContainer}>
            {[20, 100, 500, 1000].map(value => (
              <TouchableOpacity
                style={styles.amountButton}
                onPress={() => {
                  increaseQuantityByAmount(value);
                }}>
                <Text style={styles.amountText}>+{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={styles.tradeButton}
          onPress={() => {
            dispatch(
              addOrderDetails({
                questionId: QuestionId,
                price: price,
                stopPrice: 0,
                quantity: quantity,
                bookProfilePrice: 0,
                orderType: 'Limit',
                side: selectedButton,
                navigation: navigation,
              }),
            );
          }}>
          <Text style={styles.tradeText}>Trade Now </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
