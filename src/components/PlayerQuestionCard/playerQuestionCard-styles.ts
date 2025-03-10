import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1C1C1C',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,

  },
  playerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  playerDetails: {
    flex: 1,
  },
  playerName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  formText: {
    color: AppColors.bgColor,
    fontSize: 14,
  },
  betContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  betText: {
    color: AppColors.palette.osloGrey,
    fontSize: 14,
    marginBottom: 2,
  },
  betRunText: {
    color: AppColors.bgColor,
    fontWeight: '600',
    fontSize: 15,
  },
  dividerContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    borderWidth: 0.2,
    borderColor: AppColors.palette.osloGrey,
    flex: 1,
    borderStyle: 'dashed',
  },
  orText: {
    fontSize: 15,
    fontWeight: '500',
    color: AppColors.bgColor,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
  yesButton: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.palette.osloGrey,
    alignItems: 'center',
  },
  noButton: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.palette.osloGrey,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  pointsText: {
    color: '#bbb',
    fontSize: 10,
  },
});

export {styles};
