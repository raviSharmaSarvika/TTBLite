import {StyleSheet,Platform} from 'react-native';
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
  searchTextCss:{
    fontSize:11,
    color:'grey',
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  searchBarContainerCss:{
    backgroundColor:'#F4F4F4',
    width:"70%",
    height:30,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:8,
    marginTop:-5
  },
  searchBarInputContainerCss:{
    backgroundColor:'#F4F4F4',
    width:"115%",
    height:30,
    marginTop:-9,
    marginLeft:-10,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:8
  },
  searchBarInputCss:
  {
    backgroundColor:'#F4F4F4',
    width:"100%",
    height:50,
    fontSize:13,  
  ...Platform.select({
      ios: {fontFamily: 'Courier'},
      android: {fontFamily: Theme.androidFontFamily},
    }),
}
});
