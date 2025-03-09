import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.black,
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: AppColors.bgColor,
    marginBottom: 10,
  },
});

export {styles};
