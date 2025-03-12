import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {AppColors} from '../../theme';

interface Styles {
  container: ViewStyle;
  subTabContainer: ViewStyle;
  tab: ViewStyle;
  activeTab: ViewStyle;
  tabTitle: TextStyle;
  tabActiveTitle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: AppColors.palette.osloGrey,
    marginBottom: 10,
  },
  subTabContainer: {
    marginRight: 20,
  },
  tab: {
    height: 2,
    marginTop: 5,
    borderRadius: 1,
  },
  activeTab: {
    backgroundColor: AppColors.palette.lightLimeGreen,
  },
  tabTitle: {
    fontSize: 16,
    color: AppColors.palette.osloGrey,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tabActiveTitle: {
    color: AppColors.palette.lightLimeGreen,
  },
});

export {styles};
