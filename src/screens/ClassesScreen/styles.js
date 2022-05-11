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
    borderLeftColor: '#2c6fcd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
    
    elevation: 8
  },
  dayCss: {
    color: '#000000',
    fontSize: Theme.fontSize9,
    textAlign: 'right',
    backgroundColor: '#2c6fcd14',
    padding: 2,
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
  },
  timerTextCss: {
    color: '#2c6fcd',
    fontSize: Theme.fontSize9,
    textAlign: 'right',
    borderRadius: 5,
    marginLeft: 5,
    marginTop: 0.5,
    fontWeight: '800',
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
    fontWeight: 'bold',
    color:'grey',
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
    fontWeight: '700',
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  titleCss: {
    color: '#000000',
    fontSize: Theme.fontSize12,
    fontWeight: '700',
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
    
  },
  dateTextCss: {
    fontSize: Theme.fontSize9,
    fontWeight: '700',
    marginTop: 8,
    color:'grey',
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  headingTextCss:{
    fontWeight: 'bold', 
    color: '#000000', 
    letterSpacing: 2,
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  }
});
