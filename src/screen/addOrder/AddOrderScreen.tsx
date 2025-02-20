import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addOrderDetails} from '../../features/addOrder/addOrderSlice';
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
  const {yesPrice, noPrice, Question, QuestionId, slide} = questionDetails;

  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation();

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
      setPrice(yesPrice);
      setSelectedButton('Yes');
    } else {
      setPrice(noPrice);
      setSelectedButton('No');
    }
  };

  useEffect(() => {
    setCurrentPrice(slide);
  }, []);

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
              Yes ₹{questionDetails?.yesPrice}
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
              No ₹{questionDetails?.noPrice}
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
            <Text style={styles.selectPriceText}>₹{price.toFixed(1)}</Text>
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
