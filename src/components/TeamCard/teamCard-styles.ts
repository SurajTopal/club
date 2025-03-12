import {StyleSheet, Dimensions} from 'react-native';
import {AppColors} from '../../theme';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.palette.nightBlack,
    borderRadius: 15,
    padding: 10,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  playerCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    marginRight: 2,
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  roleBadge: {
    position: 'absolute',
    top: 2,
    right: 1,
    padding: 4,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: AppColors.palette.lightLimeGreen,
  },
  playerName: {
    fontWeight: '500',
    color: AppColors.bgColor,
    fontSize: 12,
    marginTop: 5,
    width: width * 0.12,
  },
  playerStat: {
    color: '#AAAAAA',
    fontSize: 11,
    width: width * 0.19,
    alignSelf: 'center',
    textAlign: 'center',
  },
  prediction: {
    color: '#AAAAAA',
    fontSize: 12,
  },
  points: {
    color: 'white',
    fontWeight: '400',
    marginTop: 3,
  },
});

export {styles};
