import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sheetContent: {
    backgroundColor: '#1c1c1e',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  balance: {
    color: '#888',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  entryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  terms: {
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: '#32CD32',
  },
  joinButton: {
    backgroundColor: '#32CD32',
    marginTop: 15,
    padding: 8,
    borderRadius: 10,
  },
});

export {styles};
