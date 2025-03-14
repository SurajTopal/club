import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: AppColors.palette.nightBlack,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
    marginHorizontal: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: AppColors.bgColor,
    width: width * 0.3,
  },
  bottomSheetContainer: {
    backgroundColor: AppColors.palette.lightBlack,
  },
  sheetContainer: {
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    alignSelf: 'center',
    color: AppColors.bgColor,
    fontSize: 16,
    fontWeight: '600',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 3,
    color: AppColors.palette.osloGrey,
  },
});

export {styles};
