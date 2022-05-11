import {StyleSheet,Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../../styles/theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backGroundColor,
  },
  headerTextCss:{
    color:'#2c6fcd',
    fontWeight:'700',
    marginTop:15,
    fontSize:Theme.fontSize13,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  logoCss:{
    width:25,
    height:25,
    marginTop:10,
    resizeMode:'contain'
  },
  EmailCss:{
    width:20,
    height:20,
    resizeMode:'contain',
    marginTop:8,
    marginLeft:4

  },
  subContainer:{
    backgroundColor:'#ffffff',
    margin:15,
    padding:10,
    elevation:2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
    
    elevation: 8
  },
 
  headingTextCss:{
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#2c6fcd',
    fontSize: Theme.fontSize12,
    marginLeft:10,
    marginTop:10,
    fontWeight: '800',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  textCss:{
    justifyContent: 'center',
    fontSize: Theme.fontSize11,
    marginTop: 8,
    color:'grey',
    fontWeight: '800',
    letterSpacing: 0.7,
    padding:4,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
});
