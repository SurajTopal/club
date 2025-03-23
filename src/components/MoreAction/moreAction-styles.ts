import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: AppColors.palette.lightBlack,
  },
  sheetContent: {
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionButton: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: AppColors.palette.osloGrey,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
  },
});

export {styles};
