import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.black,
  },
  subContainer: {
    padding: 20,
    flex: 1,
  },
  title: {
    color: AppColors.bgColor,
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
  groupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    borderRadius: 15,
    alignSelf: 'center',
    width: width * 0.85,
    marginVertical: 20,
    justifyContent: 'space-between',
    backgroundColor: AppColors.palette.osloGrey,
  },
  buttonContainer: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonTitle: {
    fontSize: 15,
    color: AppColors.palette.blackEel,
    fontWeight: '600',
  },
  activeButtonContainer: {
    backgroundColor: AppColors.palette.blackEel,
  },
  activeButtonTitle: {
    fontSize: 15,
    color: AppColors.palette.lightLimeGreen,
    fontWeight: '600',
  },
  emptyContainer: {
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.bgColor,
  },
});

export {styles};
