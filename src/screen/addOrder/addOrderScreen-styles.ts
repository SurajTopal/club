import {fonts} from './../../../node_modules/@react-navigation/native/src/theming/fonts';
import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.ghostWhite,
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: AppColors.palette.greenWhite,
    backgroundColor: AppColors.bgColor,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
    borderRadius: 12,
    backgroundColor: AppColors.palette.zircon,
    elevation: 2,
  },
  greenButton: {
    backgroundColor: AppColors.palette.greenBlue,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.45,
  },
  buttonTitle: {
    fontSize: 15,
    color: AppColors.bgColor,
    fontWeight: '500',
  },
  blackButtonTitle: {
    color: AppColors.primary,
  },
  redButton: {
    backgroundColor: AppColors.palette.lightCoral,
    padding: 10,
    borderRadius: 12,
    width: width * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    padding: 15,
  },
  middleContainer: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: AppColors.bgColor,
  },
  putGetContainer: {
    paddingVertical: 20,
    paddingHorizontal: width * 0.2,
    backgroundColor: AppColors.palette.ghostWhite,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  putGetSubContainer: {
    alignItems: 'center',
  },
  putGetText: {
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '400',
    color: AppColors.palette.osloGrey,
  },
  putAmount: {
    fontSize: 15,
    fontWeight: '600',
    color: AppColors.primary,
  },
  getAmount: {
    fontSize: 15,
    fontWeight: '600',
    color: AppColors.palette.greenBlue,
  },
  selectPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  selectPriceText: {
    fontSize: 15,
    fontWeight: '600',
  },
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: AppColors.palette.greenWhite,
  },
  button: {
    backgroundColor: AppColors.palette.greenBlue,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 13,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  slider: {
    flex: 1,
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quantityButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountButton: {
    width: width * 0.2,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  amountText: {
    fontSize: 14,
    color: AppColors.palette.blackEel,
    fontWeight: '600',
  },
  tradeButton: {
    backgroundColor: AppColors.palette.dodgerBlue,
    borderRadius: 12,
    padding: 15,
    marginTop: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tradeText: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.bgColor,
  },
});

export {styles};
