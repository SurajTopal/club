import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {AppColors} from '../../theme';

const {height, width} = Dimensions.get('screen');
interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  bannerContainer: ViewStyle;
  myMatchesContainer: ViewStyle;
  seeAllContainer: ViewStyle;
  seeAllText: TextStyle;
  title: TextStyle;
  matchText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.black,
  },
  subContainer: {padding: 20},
  bannerContainer: {
    height: 170,
    width: width * 0.9,
    marginBottom: 10,
    borderRadius: 10,
  },
  myMatchesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: AppColors.palette.greenWhite,
    fontSize: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.bgColor,
  },
  matchText: {
    color: AppColors.bgColor,
    fontWeight: '600',
    fontSize: 16,
    bottom: 5,
    position: 'absolute',
    alignSelf: 'center',
  },
});

export {styles};
