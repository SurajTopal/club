import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.black,
  },
  subContainer: {
    padding: 15,
  },
  winningRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  text: {
    fontSize: 15,
    color: AppColors.palette.osloGrey,
  },
  allTeamText: {
    fontSize: 14,
    color: AppColors.palette.osloGrey,
    marginVertical: 10,
  },
  rankAmount: {
    color: AppColors.bgColor,
    fontSize: 15,
    fontWeight: '500',
  },
  leaderboardRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  name: {
    color: AppColors.bgColor,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
  },
  leaderboardSubContainer: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginLeft: 5,
    backgroundColor: AppColors.palette.blackEel,
  },
  title: {
    fontSize: 14,
    color: AppColors.bgColor,
  },
});

export {styles};
