import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const PaymentStatus = ({status}) => {
  const [displayStatus, setDisplayStatus] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!status) {
        setDisplayStatus('pending');
      }
    }, 10000); // If no status after 10 sec, set to pending

    if (status) {
      setDisplayStatus(status);
    }

    return () => clearTimeout(timeout);
  }, [status]);

  const getStatusStyle = () => {
    switch (displayStatus) {
      case 'success':
        return styles.success;
      case 'failed':
        return styles.failed;
      default:
        return styles.pending;
    }
  };

  const getStatusText = () => {
    switch (displayStatus) {
      case 'success':
        return '✅ Payment Successful!';
      case 'failed':
        return '❌ Payment Failed!';
      default:
        return '⏳ Payment Pending...';
    }
  };

  return (
    <View style={[styles.container, getStatusStyle()]}>
      {displayStatus === null ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Text style={styles.text}>{getStatusText()}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  success: {
    backgroundColor: 'green',
  },
  failed: {
    backgroundColor: 'red',
  },
  pending: {
    backgroundColor: 'orange',
  },
  default: {
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentStatus;
