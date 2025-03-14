import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {AppColors} from '../../theme';

const {height, width} = Dimensions.get('screen');

interface Styles {
  card: ViewStyle;
  subCard: ViewStyle;
  teamRow: ViewStyle;
  team: ViewStyle;
  logo: ImageStyle;
  teamName: TextStyle;
  infoRow: ViewStyle;
  dateTime: TextStyle;
  footerContainer: ViewStyle;
  footerText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    backgroundColor: AppColors.palette.nightBlack,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    width: width * 0.6,
    overflow: 'hidden',
    height: height * 0.13,
    borderWidth: 0.5,
    borderColor: AppColors.palette.osloGrey,
  },
  subCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamRow: {
    flex: 1,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  teamName: {
    color: AppColors.bgColor,
    fontSize: 16,
    fontWeight: '600',
  },

  infoRow: {
    borderLeftWidth: 1,
    borderColor: AppColors.palette.osloGrey,
    flex: 1,
    alignItems: 'center',
  },
  dateTime: {
    color: '#bbb',
    fontSize: 14,
  },
  footerContainer: {
    position: 'absolute',
    backgroundColor: AppColors.palette.dodgerBlue,
    bottom: 0,
    width: width * 0.6,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  footerText: {
    fontSize: 14,
    color: AppColors.bgColor,
  },
});

export {styles};
