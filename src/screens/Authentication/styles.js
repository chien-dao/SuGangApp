import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    position: 'relative',
    paddingTop: 30,
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  imgBackground: {
    width: 420,
    height: 420,
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: [
      { translateY: -210 },
      { translateX: 210 }
    ],
  }
});