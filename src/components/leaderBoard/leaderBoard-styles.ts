import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.palette.black,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    color: AppColors.palette.osloGrey,
  },
  allTeam: {
    width: width * 0.4,
  },
  cardContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderColor: AppColors.palette.osloGrey,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftCardContainer: {
    justifyContent: 'space-between',
    padding: 1,
    width: width * 0.4,
  },
  teamContainer: {
    backgroundColor: AppColors.palette.nightBlack,
    borderWidth: 0.4,
    borderColor: AppColors.palette.osloGrey,
    paddingHorizontal: 2,
    borderRadius: 3,
    marginLeft: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: AppColors.bgColor,
  },
});

export {styles};
