import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  totalMatchContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    marginLeft: 10,
  },
  cardContainer: {
    padding: 20,
    borderRadius: 14,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginTop: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  cardText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '200',
  },
  cardMiddleContainer: {
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardSubMiddleContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardMatchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.15,
    marginBottom:height*0.01
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  liveContainer: {
    borderWidth: 1,
    borderColor: 'darkgreen',
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 5,
  },
  liveText: {
    fontSize: 14,
    fontWeight: 200,
    color: 'green',
    alignSelf: 'center',
  },
  cardFooter: {
    backgroundColor: 'skyblue',
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
  },
  cardSubFooter: {
    backgroundColor: 'lightblue',
    padding: 3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchInfo: {
    width: width * 0.5,
  },
});

export {styles};
