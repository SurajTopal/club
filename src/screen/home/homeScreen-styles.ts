import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {AppColors} from '../../theme';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.bgColor,
  },
});

export {styles};
