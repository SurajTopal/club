import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.black,
    padding: 16,
  },
  prizeCard: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: AppColors.palette.nightBlack,
    marginBottom: 10,
  },
  prizeTitle: {
    fontSize: 16,
    fontWeight: '200',
    color: AppColors.palette.greenWhite,
  },
  prizeAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.bgColor,
    marginVertical: 5,
  },
  prizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2A2A2E',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  prizeItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  subText: {
    color: 'gray',
    fontSize: 12,
  },
  valueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  progressDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'orange',
    marginRight: 5,
  },
  progressBar: {
    marginTop: 10,
  },
  spotContainer: {
    flexDirection: 'row',
    paddingHorizontal: 2,
    justifyContent: 'space-between',
  },
  joinButton: {
    backgroundColor: AppColors.palette.lightLimeGreen,
    marginTop: 10,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  joinText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabContainer: {
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
