import {StyleSheet} from 'react-native';
import { AppColors } from '../../theme';

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  header: {
    padding: 12,
    backgroundColor: '#222',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 12,
    backgroundColor: AppColors.palette.black,
  },
  contentText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
});

export {styles};
