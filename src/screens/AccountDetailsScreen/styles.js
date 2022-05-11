import {StyleSheet,Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../styles/theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backGroundColor,
    alignItems: 'center',
  },
  headerTextCss:{
    color:'#2c6fcd',
    fontWeight:'700',
    marginTop:-8,
    fontSize:Theme.fontSize14,
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
  textHeadingStyle:{
    fontSize:Theme.fontSize12, 
    letterSpacing: 0.5, 
    fontWeight: '900',
    color:'#000000',
    flex:1,
    marginTop:30,
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),

  },
  textStyle:{
    fontSize:Theme.fontSize12,
    letterSpacing: 0.5, 
    flex:1,
    color:'grey',
    fontWeight: '900',

    marginTop:8,
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  }
});
