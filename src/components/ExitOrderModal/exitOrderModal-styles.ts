import {Width} from './../../../node_modules/csstype/index.d';
import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: AppColors.palette.ghostWhite,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: AppColors.bgColor,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
  },
  tradeContainer: {
    flexDirection: 'row',
    backgroundColor: AppColors.bgColor,
    margin: 15,
    overflow: 'hidden',
    elevation: 3,
    borderRadius: 12,
  },
  tradeLeftContainer: {
    backgroundColor: AppColors.palette.mintCream,
    padding: 20,
  },
  tradeAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.palette.blueViolet,
  },
  quantity: {
    fontSize: 14,
    fontWeight: '400',
    color: AppColors.palette.osloGrey,
  },
  tradeRightContainer: {
    flexDirection: 'row',
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.palette.blackEel,
  },
  investedCurrentText: {
    fontSize: 15,
    fontWeight: '400',
    color: AppColors.palette.osloGrey,
  },
  sellContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    elevation: 3,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  availableQty: {
    color: 'green',
    fontSize: 14,
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: AppColors.palette.greenBlue,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  footerContainer: {
    backgroundColor: AppColors.bgColor,
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: AppColors.palette.greenWhite,
    elevation: 3,
  },
  footerSubContainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderColor: AppColors.palette.greenWhite,
  },
  instantSellText: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.palette.blueViolet,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '500',
    color: AppColors.palette.blueViolet,
  },
  walletText: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    marginBottom: 20,
    color: AppColors.palette.osloGrey,
  },
});

export {styles};
