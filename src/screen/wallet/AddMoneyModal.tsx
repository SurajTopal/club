import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';
import {useDispatch} from 'react-redux';
import {addMoney} from '../../features/wallet/addMoneySlice';
import {fetchWalletBalance} from '../../features/wallet/walletBalanceSlice';

const {width} = Dimensions.get('window');

const AddMoneyModal = props => {
  const {isVisible, setIsVisible} = props;
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleAddMoney = () => {
    if (amount) {
      let amountDetails = {
        amount: Number(amount),
        gateway_name: 'example_gateway',
        is_captuzed: true,
        gateway_response: 'success',
        created_at: '2024-09-12T15:04:05Z',
      };

      dispatch(addMoney(amountDetails))
        .then(_ => {
          dispatch(fetchWalletBalance());
        })
        .catch(error =>
          console.log('Getting Error in fetch Wallet Balance :', error),
        );
      setIsVisible(false);
    }
  };

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close Button on Top Right */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsVisible(false)}>
            <Icon
              name="close"
              type="antdesign"
              color={AppColors.primary}
              size={30}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Add Money</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddMoney}>
            <Text style={styles.buttonText}>Add Money</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 15,
    padding: 5,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: width * 0.6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 40,
    marginBottom: 15,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: AppColors.palette.dodgerBlue,
    padding: 10,
    borderRadius: 5,
    width: width * 0.4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
};

export default AddMoneyModal;
