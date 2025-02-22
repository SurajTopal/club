import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.palette.ghostWhite,
    flex: 1,
  },
  subContainer: {
    backgroundColor: AppColors.palette.dodgerBlue,
    padding: 20,
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
  activeTabContainer: {
    backgroundColor: AppColors.bgColor,
    marginTop: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  activeTabHeader: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveContainer: {
    backgroundColor: AppColors.palette.zircon,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: width * 0.3,
    alignItems: 'center',
  },
  liveText: {
    fontSize: 15,
    fontWeight: '500',
    color: AppColors.palette.blackEel,
  },
  activeBottomTabContainer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    borderColor: AppColors.palette.greenWhite,
  },
  activeBottomSubTabContainer: {
    padding: 20,
    borderRightWidth: 1,
    flex: 1,
    borderColor: AppColors.palette.greenWhite,
  },
  amountText: {
    fontSize: 14,
    color: AppColors.palette.osloGrey,
  },
  investmentAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.palette.blackEel,
  },
  profitAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.palette.lightCoral,
  },
  orderCardContainer: {
    backgroundColor: AppColors.bgColor,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  matchContainer: {
    padding: 5,
    backgroundColor: AppColors.palette.zircon,
    width: width * 0.3,
    alignItems: 'center',
    borderRadius: 5,
  },
  matchText: {
    fontSize: 15,
    color: AppColors.palette.blackEel,
    fontWeight: '600',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  orderCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  orderSubCardFooter: {
    flexDirection: 'row',
    flex: 1,
  },
  sellText: {
    fontSize: 15,
    fontWeight: '500',
    color: AppColors.palette.artyClickRed,
  },
  amountContainer: {
    padding: 10,
  },
  orderTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: AppColors.palette.osloGrey,
  },
  orderValue: {
    fontSize: 14,
    fontWeight: '700',
    color: AppColors.palette.blackEel,
  },
  orderLossValue: {
    fontSize: 14,
    fontWeight: '700',
    color: AppColors.palette.lightCoral,
  },
});

export {styles};
