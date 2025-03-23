import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {fetchTransaction} from '../../features/wallet/transactionSlice';
import {useDispatch, useSelector} from 'react-redux';
import {BottomSheet} from 'react-native-elements';
import moment from 'moment';

import {styles} from './history-styles';
import {AppColors} from '../../theme';

const History = props => {
  const {isVisible, setIsVisible} = props;
  const [transaction, setTransaction] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransaction());
  }, []);

  const fetchTansaction = useSelector(state => state.transaction?.data);

  useEffect(() => {
    if (fetchTansaction?.transactions?.length) {
      setTransaction(fetchTansaction?.transactions);
    }
  }, [fetchTansaction]);

  const renderItem = ({item}) => {
    console.log('Item : ', item.TransactionType);
    return (
      <View
        style={[
          styles.card,
          item.TransactionType === 'credit' ? styles.credit : styles.debit,
        ]}>
        <View style={styles.row}>
          <Text style={styles.amount}>₹{item.Amount}</Text>
          <Text
            style={[
              styles.type,
              item.TransactionType === 'debit' && {
                color: AppColors.palette.lightCoral,
              },
            ]}>
            {item.TransactionType.charAt(0).toUpperCase() +
              item.TransactionType.slice(1)}
          </Text>
        </View>
        <Text style={styles.date}>
          {moment(item.CreatedAt).format('DD MMM YYYY, HH:mm')}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Bottom Sheet */}
      <BottomSheet
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}>
        <View style={styles.bottomSheet}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Transaction History</Text>
          </View>
          <View style={{height: 600}}>
            <FlatList
              data={transaction}
              keyExtractor={item => item.TransactionId}
              removeClippedSubviews={false}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default History;
