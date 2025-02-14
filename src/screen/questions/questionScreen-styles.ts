import {fonts} from './../../../node_modules/@react-navigation/native/src/theming/fonts';
import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.bgColor,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.primary,
  },
  cardContainer: {
    borderRadius: 12,
    borderColor: AppColors.palette.greenWhite,
    borderWidth: 1,
    padding: 10,
    backgroundColor: AppColors.bgColor,
    marginTop: 15,
  },
  headerContainer: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: AppColors.palette.greenWhite,
    marginBottom: 15,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  subHeaderContainer: {
    flexDirection: 'row',
    width: width * 0.4,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: AppColors.palette.paleGray,
  },
  cardText: {
    fontSize: 15,
    marginLeft: width * 0.05,
    color: AppColors.palette.osloGrey,
  },
  matchContainer: {
    flexDirection: 'row',
    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamIcon: {
    width: 20,
    height: 20,
  },
  matchText: {
    fontSize: 14,
    fontWeight: '600',
  },
  vsText: {
    fontSize: 10,
    fontWeight: '500',
  },
  questionText: {
    fontSize: 16,
    color: AppColors.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
  },
  greenButton: {
    backgroundColor: AppColors.palette.mintFrost,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.4,
  },
  greenButtonTitle: {
    fontSize: 15,
    color: AppColors.palette.greenBlue,
    fontWeight: '600',
  },
  redButton: {
    backgroundColor: AppColors.palette.mistyRose,
    padding: 15,
    borderRadius: 12,
    width: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redButtonTitle: {
    fontSize: 15,
    color: AppColors.palette.lightCoral,
    fontWeight: '600',
  },
});

export {styles};
