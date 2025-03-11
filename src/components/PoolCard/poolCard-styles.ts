import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 15,
    borderWidth: 0.5,
    borderColor: AppColors.palette.osloGrey,
    marginBottom: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexiblePool: {
    color: 'lightgray',
    fontSize: 14,
    marginLeft: 5,
  },
  discount: {
    color: AppColors.palette.lightLimeGreen,
    fontSize: 14,
    fontWeight: 'bold',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  poolAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  prizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2A2A2E',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  prizeItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  subText: {
    color: 'gray',
    fontSize: 12,
  },
  valueText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 3,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'orange',
    marginRight: 5,
  },
  progressBar: {
    marginTop: 10,
  },
  spotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  leftText: {
    color: 'white',
    fontSize: 14,
  },
  totalSpots: {
    color: 'gray',
    fontSize: 14,
  },
});

export {styles};
