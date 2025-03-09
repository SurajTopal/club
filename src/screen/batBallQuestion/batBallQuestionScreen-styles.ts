import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: AppColors.palette.black,
  },
  title: {
    color: AppColors.bgColor,
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
  cardContainer: {
    backgroundColor: '#1C1C1C',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    marginRight: 6,
    fontSize: 14,
  },
  betContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  betText: {
    color: AppColors.palette.osloGrey,
    fontSize: 14,
    marginBottom: 8,
  },
  betRunText: {
    color: AppColors.bgColor,
    fontWeight: '600',
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0.7,
    borderColor: AppColors.palette.osloGrey,
  },
  optionButton: {
    backgroundColor: '#2A2A2A',
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  pointsText: {
    color: '#bbb',
    marginTop: 5,
    fontSize: 10,
  },
});

export {styles};
