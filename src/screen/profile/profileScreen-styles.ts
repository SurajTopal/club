import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: AppColors.palette.lightLimeGreen,
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    color: AppColors.bgColor,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {styles};
