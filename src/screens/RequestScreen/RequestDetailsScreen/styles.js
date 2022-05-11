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
    alignItems: 'center',
  },
  headerTextCss:{
    color:'#000000',
    fontWeight:'900',
    marginTop:10,
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  subContainer:{
    padding:20,
    backgroundColor:'#ffffff',
    elevation:2,
    margin:5,
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
    fontSize: Theme.fontSize11, 
    letterSpacing: 0.5, 
    fontWeight: '700',
    marginTop:30,
    color:'#000000',
    textAlign:'right',
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  lightText:{
    fontSize: Theme.fontSize9,  
    textAlign:'right',
    letterSpacing: 1, 
    fontWeight: 'bold',
    color:"grey",
    marginTop:30,
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  textStyle:{
    fontSize: Theme.fontSize11,  
    letterSpacing: 0.5, 
    fontWeight: '500',
    color:'#000000',
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  detailCss:{
    fontSize: Theme.fontSize10, 
    textAlign:'right',
    letterSpacing: 0.2, 
    fontWeight: 'bold',
    marginTop:30,
    textAlign:'justify',
    marginTop:10,
    lineHeight:20,
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
    color:"grey",
  },
  pdfCss:{
    width:152,
    height:50,
    resizeMode:'contain'
  },
  bookCss:{
    width:25,
    height:25,
    resizeMode:'cover',
    marginTop:5
  },
  hrLineCss:{
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    padding: 15,
    margin: -18,
    
  }
 
});
