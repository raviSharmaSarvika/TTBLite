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
  loginFormCss: {
    margin: hp(1.8),
  },
  schoolDropDownCss: {
    marginTop: hp(0.5),
    height: 40,
    borderRadius: 5,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.9,
    borderColor: '#ccc',
    height: hp(7),
    marginTop: hp(2),
    marginBottom: hp(3),
  },
  flatListDataCss: {
    backgroundColor: 'white',
    marginLeft: 8,
    marginRight: 8,
    padding: 10,
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

    elevation: 8,
  },
  dayCss: {
    color: '#000000',
    fontSize: Theme.fontSize6,
    textAlign: 'left',
    backgroundColor: '#2c6fcd14',
    padding: 2,
    width: 160,
    borderRadius: 5,
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
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
    justifyContent: 'space-between',
    padding: 15,
    marginTop: -20,
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
  newestCss: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2c6fcd14',
    padding: 5,
    borderRadius: 10,
  },
  newestTextCss: {
    fontSize: Theme.fontSize11,
    color: '#2C6FCD',
    fontWeight: '800',
    letterSpacing: 2,
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  bodyBackground: {
    backgroundColor: '#EFEFEF',
    overflow: 'hidden',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
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
  headingTextCss: {
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 2,
    fontSize: 12,
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
