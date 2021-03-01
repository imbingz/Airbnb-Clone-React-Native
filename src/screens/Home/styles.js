import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
    width: '50%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 200,
    marginLeft: 25,
    marginTop: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 20,
    zIndex: 10,
    marginHorizontal: 10,
    width: '95%',
    // width: Dimensions.get('screen').width - 20,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#555',
    marginLeft: 15,
  },
});
export default styles;
