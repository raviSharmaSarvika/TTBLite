import {StyleSheet,Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../styles/theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C6FCD',
  },
  backText: {
    letterSpacing: 2,
    fontSize: hp(2),
    color: '#000000',
    marginLeft:10,
   ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  buttonTextCss: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing:1,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  textCss: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize:hp(2),
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  ttbLogoCss:{
    width: wp(40),
    height: hp(8),
    justifyContent:'center',
    alignSelf:'center',
    resizeMode: 'contain',

  },
  loginButtonCss: {
    backgroundColor: '#2C6FCD',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 8,
    height:hp(5.5)
  },
  buttonContainer: {
    width: wp(91),
    marginTop: hp(3),
    alignSelf: 'center',
  },
  buttonTextCss: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing:1,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  loginFormCss:{
   
    margin: hp(1.8)
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: hp(1),
    width: wp(1),
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  svgCss:{
    width: "100%",
    height: 100,
    marginBottom:-10
    
  },
  backArrow:{
    width: wp(3.6),
    height:hp(3),
  },
  schoolDropDownCss:{
    marginTop:hp(4),
    height: hp(5.5),
    borderRadius:2,
    borderColor:'#eee',
    elevation:3,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  termsCss:{
    color: '#a6a6a6',
    fontSize: hp(1.5),
    marginTop: 15,
    fontWeight:'bold',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
});
