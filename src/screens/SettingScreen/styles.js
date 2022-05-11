import {StyleSheet,Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../styles/theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backGroundColor,
    alignItems: 'center',
  },
  headerTextCss:{
    color:'#2c6fcd',
    fontWeight:'900',
    marginTop:-8,
    fontSize:13,
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  subContainer:{
    width: "95%", 
    padding:20,
    backgroundColor:'#ffffff',
    elevation:2,
    margin:10,
    marginTop:15,
    borderRadius:8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
    
    elevation: 8
  },
  textStyle:{
    color: '#8d99a4',
    fontWeight: 'bold',
    fontSize: 11,
     ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }), 
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.9,
    borderColor: 'grey',
    height: hp(5.5),
    marginTop: hp(1.5),
    marginBottom: hp(3),
    elevation: 3,
    borderRadius: 4,
  },
  textInputCss:{
    flex: 1,
    color:'#000000',
  ...Platform.select({
      ios: {fontFamily: 'Courier'},
      android: {fontFamily: Theme.androidFontFamily},
    }),    
    fontSize: 12,
    letterSpacing: 1,
    marginLeft: 5,
  },
  schoolDropDownCss:{
    marginTop:hp(1.9),
    borderColor:'grey',
    borderRadius:0.9,
    height:hp(5),
    elevation:4,
    },
    loginButtonCss: {
      backgroundColor: '#2C6FCD',
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 7,
      height: hp(6),
    },
     buttonContainer: {
      width: wp(30),
      alignSelf: 'center',
    },
    buttonTextCss: {
      fontSize: 12,
      color: '#E91E1E',
      fontWeight: 'bold',
      letterSpacing:1,
      ...Platform.select({
        ios: {fontFamily: Theme.iosFontFamily},
        android: {fontFamily: Theme.androidFontFamily},
      }),
    },
});
