import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.ghostWhite,
  },
  amountText: {
    color: AppColors.palette.blackEel,
    fontSize: 22,
    fontWeight: '600',
  },
  totalBalanceText: {
    color: AppColors.palette.osloGrey,
    fontSize: 15,
    fontWeight: '600',
  },
  depositWinningsContainer: {
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: AppColors.bgColor,
  },
  subContainer: {
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  depositAmount: {
    fontSize: 13,
    fontWeight: '600',
    color: AppColors.palette.blackEel,
  },
  rechargeButton: {
    backgroundColor: AppColors.palette.black,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  rechargeText: {
    color: AppColors.bgColor,
    fontSize: 14,
    fontWeight: '500',
  },
  promotionalContainer: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    marginBottom: height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.bgColor,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderBottomWidth: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export {styles};
