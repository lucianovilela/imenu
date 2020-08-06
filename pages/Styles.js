import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },

  containerLogin: {
    height: '100%',
    flex: 1,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginImg: {
    justifyContent:'center',
    paddingTop: 50,
    height: 80,
    width: 80,
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    fontSize: 16,
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
  },
  
  buttonLogin: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    backgroundColor: '#000055',
    color: 'white',
    borderRadius: 8
  },
  
  buttonGoogle: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 30,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 8
  },
  containerRestaurante: {
    marginVertical: '5%'
  },
  
  titulo: {
    flexDirection: 'row' ,
    flex: 1,
    width: '90%',
    padding: 5,
    marginHorizontal: 0,
    fontSize: 18 , 
  }

});

