import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  buttonRedirect: {
    width: 200,
    backgroundColor: '#006effff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 150/2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    resizeMode: 'cover',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 16,
    backgroundColor: '#e8e8e8',
  },
});

export default mainStyles;
