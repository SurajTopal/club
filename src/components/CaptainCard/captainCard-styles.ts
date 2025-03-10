import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: width * 0.42,
    marginBottom: 15,
    borderWidth: 0.7,
    borderColor: AppColors.palette.osloGrey,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  playerImage: {
    height: height * 0.1,
    width: '100%',
  },
  playerName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '200',
  },
  question: {
    color: '#888',
    fontSize: 14,
  },
  answer: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  points: {
    color: AppColors.bgColor,
    fontSize: 14,
  },
  text: {
    textDecorationLine: 'line-through',
    color: AppColors.palette.osloGrey,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: height * 0.005,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: AppColors.palette.osloGrey,
    marginTop: height * 0.008,
  },
  buttonText: {
    color: AppColors.palette.lightLimeGreen,
    fontSize: 16,
    fontWeight: 'bold',
  },
  vcButton: {
    backgroundColor: '#444',
  },
  vcText: {
    color: AppColors.palette.lightLimeGreen,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {styles};
