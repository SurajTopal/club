import {AppColors} from '../../theme';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  emptyContainer: {
    height: height * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.palette.dodgerBlue,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  totalMatchContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    marginLeft: 10,
  },
  cardContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: AppColors.palette.greenWhite,
    marginTop: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: AppColors.palette.greenWhite,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: 'black',
    width: width * 0.34,
    fontWeight: '400',
  },
  cardTitle: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  cardMiddleContainer: {
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardSubMiddleContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.35,
  },
  cardMatchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.25,
    marginBottom: height * 0.01,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  liveContainer: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: AppColors.palette.dodgerBlue,
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 5,
  },
  liveText: {
    fontSize: 13,
    fontWeight: 500,
    color: AppColors.palette.dodgerBlue,
    alignSelf: 'center',
  },
  cardFooter: {
    backgroundColor: AppColors.palette.dodgerBlue,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
  },
  cardSubFooter: {
    backgroundColor: AppColors.palette.darkSkyBlue,
    padding: 3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: 14,
    color: AppColors.bgColor,
  },
  matchInfo: {
    width: width * 0.5,
    color: AppColors.bgColor,
  },
});

export {styles};
