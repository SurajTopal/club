import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Slider from '@react-native-community/slider';
import {BottomSheet, Switch} from 'react-native-elements';
import {AppColors} from '../../theme';

import {styles} from './exitOrderModal-styles';

export default function ExitOrderModal(props) {
  const {isVisible, setIsVisible} = props;

  const [checked, setChecked] = useState(false);

  const [price, setPrice] = useState(1.6); // Default price
  const minPrice = 0.2;
  const maxPrice = 9.8;
  const step = 0.5; // Price change step

  const decreasePrice = () => {
    setPrice(prevPrice => Math.max(prevPrice - step, minPrice));
  };

  const increasePrice = () => {
    setPrice(prevPrice => Math.min(prevPrice + step, maxPrice));
  };

  return (
    <BottomSheet isVisible={isVisible}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.questionText}>
              Afghanistan to win to match vs South Africa ?
            </Text>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={{padding: 10, alignSelf: 'flex-end'}}>
              <Icon
                name="closecircle"
                size={25}
                color={AppColors.palette.blackEel}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tradeContainer}>
            <View style={styles.tradeLeftContainer}>
              <Text style={styles.tradeAmount}>Yes | ₹3.2</Text>
              <Text style={styles.quantity}>2.0 Qty</Text>
            </View>
            <View style={styles.tradeRightContainer}>
              <View>
                <Text style={styles.amount}>₹3.20L</Text>
                <Text style={styles.investedCurrentText}>Invested</Text>
              </View>
              <View>
                <Text style={styles.amount}>₹1.60L</Text>
                <Text style={styles.investedCurrentText}>Current</Text>
              </View>
            </View>
          </View>
          <View style={styles.sellContainer}>
            <Text style={styles.label}>Sell price</Text>
            <Text style={styles.availableQty}>
              20,421.10 quantities available
            </Text>
            <View style={styles.priceContainer}>
              {/* Minus Button */}
              <TouchableOpacity onPress={decreasePrice} style={styles.button}>
                <Icon
                  name="minuscircle"
                  size={25}
                  color={AppColors.palette.greenBlue}
                />
              </TouchableOpacity>

              {/* Slider */}
              <Slider
                style={styles.slider}
                minimumValue={minPrice}
                maximumValue={maxPrice}
                step={step}
                value={price}
                onValueChange={value => setPrice(value)}
                minimumTrackTintColor={AppColors.palette.greenBlue}
                maximumTrackTintColor="#E0E0E0"
                thumbTintColor={AppColors.palette.greenBlue}
              />

              {/* Plus Button */}
              <TouchableOpacity onPress={increasePrice} style={styles.button}>
                <Icon
                  name="pluscircle"
                  size={25}
                  color={AppColors.palette.greenBlue}
                />
              </TouchableOpacity>
            </View>

            {/* Total Amount */}
            <Text style={styles.total}>Total: ₹{price.toFixed(2)}</Text>
          </View>

          <View style={styles.footerContainer}>
            <View style={styles.footerSubContainer}>
              <Switch
                value={checked}
                onValueChange={value => setChecked(value)}
              />
              <View style={{marginLeft: 10}}>
                <Text style={styles.instantSellText}>Instant Sell</Text>
                <Text style={styles.footerText}>
                  Sell all your opinions at current market price. 1% commission
                  applies.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {}}
              style={{
                padding: 10,
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                backgroundColor: AppColors.palette.dodgerBlue,
              }}>
              <Text style={{fontSize: 16, color: AppColors.bgColor}}>
                Sell Yes
              </Text>
            </TouchableOpacity>

            <Text style={styles.walletText}>Wallet Balance : ₹2900</Text>
          </View>
        </View>
    </BottomSheet>
  );
}
