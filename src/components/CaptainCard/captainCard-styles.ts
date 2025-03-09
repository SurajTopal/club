import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: width * 0.43,
    marginBottom: 15,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  playerImage: {
    width: '100%',
    height: '100%',
  },
  playerName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  question: {
    color: '#888',
    fontSize: 14,
    marginVertical: 5,
  },
  answer: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  points: {
    color: '#888',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#0f0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  vcButton: {
    backgroundColor: '#444',
  },
  vcText: {
    color: '#7fdb50',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {styles};
