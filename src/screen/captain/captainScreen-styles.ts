import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.black,
    padding: 20,
  },
  captainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingBottom: '5%',
  },
  captainSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  captainTitle: {
    color: AppColors.palette.osloGrey,
    fontSize: 15,
    fontWeight: '400',
  },
  title: {
    color: AppColors.palette.lightLimeGreen,
    fontSize: 20,
    marginRight: 10,
    fontWeight: '600',
  },
  captainSubTitle: {
    color: AppColors.bgColor,
    fontSize: 15,
    fontWeight: '400',
  },
  saveButton: {
    padding: 10,
    backgroundColor: AppColors.palette.lightLimeGreen,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    fontSize: 15,
    fontWeight: '500',
    color: AppColors.palette.black,
  },
});

export {styles};
