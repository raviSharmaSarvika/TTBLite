import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../styles/theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C6FCD',
  },
  welcomeTextCss: {
    letterSpacing: 2,
    fontSize: hp(2.2),
    marginTop: hp(1),
    color: '#000000',
    fontWeight: 'bold',
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  textCss: {
    color: '#8d99a4',
    fontWeight: 'bold',
    fontSize: hp(1.5),
    letterSpacing: 2,
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  ttbLogoCss: {
    width: wp(40),
    height: hp(8),
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  loginButtonCss: {
    backgroundColor: '#2C6FCD',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 7,
    height: hp(6),
  },
  buttonContainer: {
    width: wp(91),
    marginTop: hp(2),
    alignSelf: 'center',
  },
  buttonTextCss: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  loginFormCss: {
    margin: hp(1.8),
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    height: hp(6.2),
    marginTop: hp(1.5),
    marginBottom: hp(3),
    elevation: 3,
    borderRadius: 4,
  },
  textInputCss: {
    flex: 1,
    color:'#000000',
    ...Platform.select({
      ios: {fontFamily: 'Courier'},
      android: {fontFamily: Theme.androidFontFamily},
    }),
    fontSize: 12,
    letterSpacing: 1,
    marginLeft:5
  },
  forgotPass: {
    textAlign: 'right',
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: hp(-1.8),
    letterSpacing: 0.7,
    textDecorationLine: 'underline',
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  svgCss: {
    width: '100%',
    height: 100,
    marginBottom: -10,
  },
  loginWithSchoolCss: {
    color: '#2c6fcd',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  termsCss: {
    color: '#a6a6a6',
    fontSize: hp(1.5),
    marginTop: 20,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
});
