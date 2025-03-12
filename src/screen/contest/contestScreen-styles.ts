import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.black,
  },
  subContainer: {
    padding: 15,
  },
  tabContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export {styles};
