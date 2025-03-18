import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.palette.lightLimeGreen,
    marginTop: 10,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export {styles};
