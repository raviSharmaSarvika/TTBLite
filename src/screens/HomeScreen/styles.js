import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../styles/theme';
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
    elevation: 16,
    borderRadius: 5,
    borderLeftWidth: 4,
    marginTop: 5,
    shadowColor: '#2c6fcd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
    
    elevation: 8
  },
  timerCss: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#2c6fcd',
    borderRadius: 10,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 8,
  },
  timerTextCss: {
    color: '#2c6fcd',
    fontSize: Theme.fontSize7,
    textAlign: 'right',
    borderRadius: 5,
    marginLeft: 5,
    marginTop: 0.5,
    fontWeight: 'bold',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  fliterBarCss: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingBottom: 8,
    backgroundColor: '#FBFCFE',
    borderBottomWidth:0.7,
    borderBottomColor:'#ccc',
    paddingTop:2,
    
  },
  totalClassCss: {
    fontSize: Theme.fontSize10,
    letterSpacing: 1,
    textAlign: 'left',
    color:'grey',
    fontWeight: 'bold',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  loginButtonCss: {
    backgroundColor: '#2C6FCD',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 18,
    height: 35,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  buttonContainer: {
    width: 95,
    marginTop: hp(2),
    justifyContent: 'space-between',
    alignSelf: 'center',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  buttonTextCss: {
    fontSize: Theme.fontSize11,
    color: '#E91E1E',
    fontWeight: 'bold',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  notificationBgCss: {
    margin: 8,
    marginTop: 5,
    height: 80,
    resizeMode: 'contain',
  },
  notificationCss: {
    width: 40,
    height: 60,
    resizeMode: 'contain',
  },
  messageCss: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: '800',
    color: '#ffffff',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  miniIcons: {
    width: 12,
    height: 14,
  },
});
