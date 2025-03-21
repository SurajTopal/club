import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.black,
  },
  subContainer: {
    padding: 15,
    flex: 1,
  },
  tabContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  createTeamButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
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
