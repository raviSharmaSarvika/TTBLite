import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../styles/theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backGroundColor,
  },

  flatListDataCss: {
    backgroundColor: 'white',
    marginLeft: 8,
    marginRight: 8,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    shadowColor: '#2c6fcd',
    borderColor:'grey',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 5.49,
    
    elevation: 12,
  },
  logoCss: {
    width: wp(8),
    height: hp(8),
    marginLeft:5,
    resizeMode: 'contain',
  },
  titleCss: {
    color: '#000000',
    fontSize: Theme.fontSize11,
    fontWeight: '900',
    marginLeft: 10,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
    marginTop:12
  },
  messageCss: {
    color: '#000000',
    fontSize: Theme.fontSize9,
    fontWeight: '800',
    marginLeft: 10,
    marginTop: 3,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  timerDetailsCss: {
    fontSize: Theme.fontSize7,
    fontStyle: 'italic',
    fontWeight: '700',
    color:'grey',
    textAlign: 'right',
    marginRight:8,
    marginBottom:5,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  readAllText: {
    color: '#2C6FCD',
    textAlign: 'center',
    fontWeight: '900',
    fontSize:13,
    textDecorationLine: 'underline',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
});
