import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: AppColors.palette.black,
  },
  title: {
    color: AppColors.bgColor,
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
});

export {styles};
