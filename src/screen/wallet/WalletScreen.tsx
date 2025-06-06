import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {fetchWalletBalance} from '../../features/wallet/walletBalanceSlice';
import History from '../../components/History/History';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import AddMoneyModal from './AddMoneyModal';
import {Icon} from 'react-native-elements';
import {useAuth} from '../../auth-context';

import {styles} from './walletScreen-styles';

export default function WalletScreen() {
  const [walletBalance, setWalletBalance] = useState(0);
  const [depositBalance, setDepositBalance] = useState(0);
  const [winningBalance, setWinningBalance] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false);

  const {signOut} = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWalletBalance(signOut));
  }, []);

  const fetchBalance = useSelector(state => state.walletBalance);

  useEffect(() => {
    const balance = fetchBalance?.data?.balance;
    const winAmount = fetchBalance?.data?.winningBalance;
    if (balance >= 0 && winAmount >= 0) {
      setDepositBalance(balance);
      setWalletBalance(balance + winAmount);
      setWinningBalance(winAmount);
    }
  }, [fetchBalance]);

  const icons = {
    transaction: 'https://img.icons8.com/ios/50/safe.png',
    vault: 'https://img.icons8.com/ios/50/safe.png',
    kyc: 'https://img.icons8.com/ios/50/verified-account.png',
  };

  const quickActions = [
    {
      id: '1',
      title: 'Transaction History',
      description: 'For all balance debits & credits',
      icon: icons.transaction,
      onPress: () => setIsHistoryModalVisible(true),
    },
    {
      id: '2',
      title: 'Probo Vault',
      description: 'For financial discipline',
      icon: icons.vault,
      amount: '₹0',
      onPress: () => console.log('Probo Vault Clicked'),
    },
    {
      id: '3',
      title: 'KYC verification',
      description: 'Tap to verify',
      icon: icons.kyc,
      onPress: () => console.log('KYC verification Clicked'),
    },
  ];

  const QuickActions = () => {
    return (
      <View>
        <FlatList
          data={quickActions}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.actionItem} onPress={item.onPress}>
              <Image source={{uri: item.icon}} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              {item.amount && <Text style={styles.amount}>{item.amount}</Text>}
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.amountText}>₹ {walletBalance}</Text>
        <Text style={styles.totalBalanceText}>Total balance</Text>

        <View style={styles.depositWinningsContainer}>
          <View style={styles.subContainer}>
            <View>
              <Text>Deposit</Text>
              <Text style={styles.depositAmount}>₹ {depositBalance}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(true);
              }}
              style={styles.rechargeButton}>
              <Text style={styles.rechargeText}>Recharge</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.depositWinningsContainer}>
          <View style={styles.subContainer}>
            <View>
              <Text>Winnnings</Text>
              <Text style={styles.depositAmount}>₹{winningBalance}</Text>
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.rechargeButton}>
              <Text style={styles.rechargeText}>Widthdraw</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.promotionalContainer}>
          <View>
            <Text>Promotional</Text>
            <Text>₹ 0</Text>
          </View>
          <Icon name="chevron-right" type="entypo" />
        </View>
      </View>
      <AddMoneyModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <History
        setIsVisible={setIsHistoryModalVisible}
        isVisible={isHistoryModalVisible}
      />
      <QuickActions />
    </View>
  );
}
