import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#444',
    overflow: 'hidden',
  },
  subCard: {
    padding: 15,
    paddingTop: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: AppColors.palette.osloGrey,
  },
  prizePool: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppColors.bgColor,
  },
  text: {
    fontSize: 14,
    color: AppColors.palette.osloGrey,
    marginRight: 10,
  },
  spot: {
    marginRight: 0,
  },
  entryFee: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  firstPrize: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFAA33',
  },
  details: {
    fontSize: 12,
    color: '#BBB',
    marginBottom: 8,
  },
  teamContainer: {
    backgroundColor: '#333',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderColor: AppColors.palette.osloGrey,
  },
  teamCardContainer: {
    width: width * 0.4,
  },
  teamName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  score: {
    fontSize: 14,
    color: '#ddd',
  },
  rank: {
    fontSize: 14,
    color: AppColors.palette.osloGrey,
  },
  winnings: {
    fontSize: 14,
    color: AppColors.palette.lightLimeGreen,
    fontWeight: 'bold',
  },
});

export {styles};
