import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';


const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.palette.black,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: AppColors.palette.osloGrey,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: AppColors.bgColor,
  },
  walletContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.palette.blackEel,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
    color: AppColors.palette.greenWhite,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {styles};
