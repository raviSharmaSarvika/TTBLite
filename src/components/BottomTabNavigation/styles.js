import {StyleSheet,Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import Theme from '../../styles/theme';
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

export default StyleSheet.create({
  headerCss: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerLogoCss: {
    width: 85,
    height: 30,
    resizeMode:'contain'

  },
  bottomTabImgActive: {
    width: wp(6),
    height: hp(3),
    marginTop: 2,

  },
  notificationCss: {
    width: 20,
    height: 23,
    marginRight: 15,
    marginTop: 5,
    resizeMode:'contain'
  },
  profileCss: {
    width: 25,
    height: 28,
    marginRight: 15,
    resizeMode:'contain'

  },
  tabBarTextCss:{
  ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
    marginBottom:2,
    fontWeight:"bold",
    fontSize:Theme.fontSize10
  }
});
