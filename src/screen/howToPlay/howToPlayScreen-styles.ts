import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.palette.black,
    paddingBottom: 20,
  },
  bannerContainer: {
    width: width,
    height: height * 0.3,
  },
  tabContainer: {
    flexDirection: 'row',
    width: width * 0.6,
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    backgroundColor: AppColors.palette.nightBlack,
    width: width * 0.19,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '400',
    color: AppColors.palette.greenWhite,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center',
    color: AppColors.bgColor,
  },
  selectedTabText: {
    fontSize: 17,
    fontWeight: '300',
    marginTop: 5,
    color: AppColors.bgColor,
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  greenTitle: {
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center',
    color: AppColors.palette.lightLimeGreen,
  },
});

export {styles};
