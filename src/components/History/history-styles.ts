import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  openButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSheet: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: AppColors.palette.greenWhite,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 2,
  },
  credit: {
    borderLeftWidth: 5,
    borderLeftColor: AppColors.palette.greenBlue,
  },
  debit: {
    borderLeftWidth: 5,
    borderLeftColor: AppColors.palette.lightCoral,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
  },
  type: {
    fontSize: 14,
    fontWeight: '500',
    color: AppColors.palette.greenBlue,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginTop: 3,
  },
  closeButton: {
    backgroundColor: AppColors.palette.dodgerBlue,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {styles};
