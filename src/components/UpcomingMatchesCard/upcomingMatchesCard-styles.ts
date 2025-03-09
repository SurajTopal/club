import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1C1C1C',
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 0.7,
    borderColor: AppColors.palette.osloGrey,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timer: {
    color: 'orange',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 8,
  },
  endTime: {
    color: AppColors.palette.osloGrey,
    fontSize: 14,
    fontFamily: '400',
  },
  matchTime: {
    color: '#ccc',
    fontSize: 14,
    marginRight: 8,
  },
  icon: {
    marginLeft: 'auto',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingRight: 5,
    alignItems: 'center',
    width: width * 0.8,
  },
  leagueText: {
    color: '#bbb',
    fontSize: 12,
    marginTop: 4,
  },
  teamContainer: {
    marginTop: 10,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  teamLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  teamName: {
    color: AppColors.palette.osloGrey,
    fontSize: 16,
    marginLeft: 10,
  },
  teamShortName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  prizeContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  megaText: {
    color: 'limegreen',
    fontWeight: 'bold',
  },
  prizeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {styles};
