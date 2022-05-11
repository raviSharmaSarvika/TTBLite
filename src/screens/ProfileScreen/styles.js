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
  profileImgCss: {
    width: 140,
    height: 140,
    position: 'absolute',
  },
  percentageCss: {
    backgroundColor: 'green',
    color: 'white',
  },
  profileLogoutTextCss: {
    fontWeight: '900',
    alignSelf: 'center',
    color: '#EC1D1D',
    fontSize: Theme.fontSize12,
    marginLeft: 15,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  profileTextCss: {
    fontWeight: '900',
    color: '#2C6FCD',
    fontSize: Theme.fontSize12,
    marginLeft: 15,
    marginTop: 3,
    letterSpacing: 0.5,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  profileBgCss: {
    flex:4,
    padding: 20,
    elevation: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
    
    elevation: 8
  },
  nameCss: {
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    color: '#000',
    fontSize: Theme.fontSize20,
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  emailCss: {
    alignSelf: 'center',
    marginTop: 5,
    color:'grey',
    fontSize: Theme.fontSize12,
    fontWeight: 'bold',
 ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
});
