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
  textCss: {
    color: '#8d99a4',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 2,
    marginTop: 2,
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  filterFormCss: {
    margin: hp(1.8),
  },
  schoolDropDownCss: {
    marginTop: hp(0.5),
    height: 40,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.7,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.9,
    borderColor: '#ccc',
    height: hp(5),
    marginTop: hp(2),
    marginBottom: hp(3),
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
  filterTitleCss: {
    color: '#000000',
    fontWeight: '800',
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  cancelCss: {
    color: '#000000',
    fontWeight: '600',
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
    fontSize: 16,
  },
  buttonTextCss: {
    fontSize: 12,
    color: '#E91E1E',
    fontWeight: 'bold',
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
});
