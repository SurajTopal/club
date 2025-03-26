import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button/Button';
import {AppColors} from '../theme';
import {useAuth} from '../auth-context';

const CustomDrawer = props => {
  const navigation = useNavigation();
  const {signOut} = useAuth();

  return (
    <LinearGradient colors={['#1B242E', 'black']} style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.container}>
        <View style={styles.header}>
          {/* Profile Image */}
          <Image
            source={require('../assets/icons/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.username}>KSRQRH HEROES</Text>
        </View>

        {/* Menu Items */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Wallet')}>
          <Icon name="credit-card" size={20} color="#fff" />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuText}>My Balance</Text>
            <Text style={styles.menuAmount}>₹0</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="cog" size={20} color="#fff" />
          <Text style={styles.menuText}>My Info & Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('How to Play')}>
          <Icon name="gamepad" size={20} color="white" />
          <Text style={styles.menuText}>How to Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="shield" size={20} color="white" />
          <Text style={styles.menuText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="headphones" size={20} color="white" />
          <Text style={styles.menuText}>Help & Support</Text>
        </TouchableOpacity>
        <Button title="Logout" handleButtonPress={signOut} />

        <Text style={styles.version}>VERSION 1.0.1</Text>
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  username: {
    color: AppColors.palette.lightLimeGreen,
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
  },
  menuItemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
  },
  menuAmount: {
    color: '#fff',
    fontSize: 14,
  },
  addCashButton: {
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    padding: 10,
  },
  addCashText: {color: '#72FF00', fontWeight: 'bold'},
  version: {
    color: AppColors.palette.greenWhite,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CustomDrawer;
