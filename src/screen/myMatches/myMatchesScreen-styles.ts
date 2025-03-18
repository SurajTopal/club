import {StyleSheet, TextStyle, ViewStyle, Dimensions} from 'react-native';
import {AppColors} from '../../theme';

const {height, width} = Dimensions.get('screen');

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  tabContainer: ViewStyle;
  activeTabContainer: ViewStyle;
  tabSubContainer: ViewStyle;
  tabName: TextStyle;
  activeTabName: TextStyle;
  matchText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: AppColors.palette.black,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: AppColors.bgColor,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: AppColors.palette.nightBlack,
    borderRadius: 15,
    padding: 4,
    marginTop: height * 0.02,
    justifyContent: 'space-between',
  },
  activeTabContainer: {
    backgroundColor: AppColors.palette.blackEel,
  },
  tabSubContainer: {
    borderRadius: 15,
    padding: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabName: {
    color: AppColors.palette.lightLimeGreen,
  },
  tabName: {
    fontSize: 15,
    fontWeight: '400',
    color: AppColors.palette.osloGrey,
  },
  matchText: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.bgColor,
    position: 'absolute',
    alignSelf: 'center',
    bottom: height * 0.15,
  },
});

export {styles};
