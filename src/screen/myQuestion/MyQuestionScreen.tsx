import React, {useState} from 'react';
import {AppColors} from '../../theme';
import {View, Text, TouchableOpacity} from 'react-native';


import {styles} from './myQuestionScreen-styles';

export default function MyQuestionScreen() {
  const [activeTab, setActiveTab] = useState('Active');
  const [isOpen, setIsOpen] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setActiveTab('Active')}
            style={[
              styles.greenButton,
              activeTab !== 'Active' && {
                backgroundColor: AppColors.palette.zircon,
              },
            ]}>
            <Text
              style={[
                styles.buttonTitle,
                activeTab !== 'Active' && styles.blackButtonTitle,
              ]}>
              Active Questions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.redButton,
              activeTab !== 'Closed' && {
                backgroundColor: AppColors.palette.zircon,
              },
            ]}
            onPress={() => setActiveTab('Closed')}>
            <Text
              style={[
                styles.buttonTitle,
                activeTab !== 'Closed' && styles.blackButtonTitle,
              ]}>
              Closed Questions
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'Active' && (
          <View style={styles.activeTabContainer}>
            <View style={styles.activeTabHeader}>
              <View style={styles.liveContainer}>
                <Text style={styles.liveText}>Live Trades</Text>
              </View>
            </View>
            <View style={styles.activeBottomTabContainer}>
              <View style={styles.activeBottomSubTabContainer}>
                <Text style={styles.amountText}>Total Investment</Text>
                <Text style={styles.investmentAmount}>₹ 3.30L</Text>
              </View>
              <View style={styles.activeBottomSubTabContainer}>
                <Text style={styles.amountText}>Current Value</Text>
                <Text style={styles.profitAmount}>₹ 2.20L</Text>
              </View>
              <View style={styles.activeBottomSubTabContainer}>
                <Text style={styles.amountText}>Total P&L</Text>
                <Text style={styles.profitAmount}>₹ 1.10L</Text>
              </View>
            </View>
          </View>
        )}

        {activeTab === 'Closed' && (
          <View style={styles.activeTabContainer}>
            <View style={styles.activeTabHeader}>
              <View style={styles.liveContainer}>
                <Text style={styles.liveText}>Closed Trades</Text>
              </View>
            </View>
            <View style={styles.activeBottomTabContainer}>
              <View style={styles.activeBottomSubTabContainer}>
                <Text style={styles.amountText}>Total Investment</Text>
                <Text style={styles.investmentAmount}>₹ 3.30L</Text>
              </View>
              <View style={styles.activeBottomSubTabContainer}>
                <Text style={styles.amountText}>Current Value</Text>
                <Text style={styles.profitAmount}>₹ 2.20L</Text>
              </View>
              <View style={styles.activeBottomSubTabContainer}>
                <Text style={styles.amountText}>Total P&L</Text>
                <Text style={styles.profitAmount}>₹ 1.10L</Text>
              </View>
            </View>
          </View>
        )}
      
      </View>

      {activeTab === 'Active' && (
        <View style={styles.orderCardContainer}>
          <View style={styles.matchContainer}>
            <Text style={styles.matchText}>
              AFG<Text>vs</Text>SA
            </Text>
          </View>
          <Text style={styles.question}>
            India to win the match vs South Africa ?{' '}
          </Text>
          <View style={styles.orderCardFooter}>
            <View style={styles.orderSubCardFooter}>
              <View style={styles.amountContainer}>
                <Text style={styles.orderTitle}>Invested</Text>
                <Text style={styles.orderValue}>3.20L</Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.orderTitle}>Current</Text>
                <Text style={styles.orderLossValue}>2.20L</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.sellText}>Sell</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {activeTab === 'Closed' && (
        <View style={styles.orderCardContainer}>
          <View style={styles.matchContainer}>
            <Text style={styles.matchText}>
              AFG<Text>vs</Text>SA
            </Text>
          </View>
          <Text style={styles.question}>
            South Africa to score 120 or more runs by 24.0 overs ?{' '}
          </Text>
          <View style={styles.orderCardFooter}>
            <View style={styles.orderSubCardFooter}>
              <View style={styles.amountContainer}>
                <Text style={styles.orderTitle}>Invested</Text>
                <Text style={styles.orderValue}>3.20L</Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.orderTitle}>Return</Text>
                <Text style={styles.orderLossValue}>-2.20L</Text>
              </View>
            </View>
          </View>
        </View>
      )}

    
    </View>
  );
}
