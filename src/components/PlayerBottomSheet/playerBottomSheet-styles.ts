import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: AppColors.palette.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: AppColors.palette.osloGrey,
  },
  yourTeamText: {
    fontSize: 14,
    color: AppColors.bgColor,
    alignSelf: 'center',
    marginBottom: 5,
    fontWeight: '700',
  },
  footerSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: width * 0.75,
    paddingTop: 10,
  },
  footerCard: {
    backgroundColor: AppColors.palette.nightBlack,
    flex: 1,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  footerSubCard: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  footerText: {
    fontSize: 12,
    color: AppColors.palette.osloGrey,
    width: width * 0.22,
    marginLeft: 10,
    fontWeight: '500',
  },
  yesText: {
    color: AppColors.bgColor,
    fontWeight: '600',
  },
  removeButton: {
    backgroundColor: AppColors.palette.black,
    right: -7,
    top: -7,
    borderRadius: 10,
    position: 'absolute',
    padding: 4,
  },
  nextButton: {
    backgroundColor: AppColors.palette.lightLimeGreen,
    paddingVertical: 35,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginLeft: 10,
  },
  nextText: {
    fontSize: 16,
    color: AppColors.palette.black,
    fontWeight: '500',
  },
});

export {styles};
