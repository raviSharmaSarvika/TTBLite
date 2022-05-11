import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  SafeAreaView,
  Button,
} from 'react-native';
import styles from './styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ProfileIcon from 'src/images/ProfileScreen/Profile_active.svg';
import Right_arrow from 'src/images/ProfileScreen/Right_arrow.svg';
import Work from 'src/images/ProfileScreen/work.svg';
import Settings from 'src/images/ProfileScreen/settings.svg';
import Exit from 'src/images/ProfileScreen/exit.svg';
import Helper from 'src/Utility/Helper';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {HelperComponent} from 'src/Utility/HelperComponent';

var halfRotateData = 360;

function ProfileScreen(props) {
  const { clearAll ,customButtonAlert,getData} = HelperComponent();
  const navigation = useNavigation();
  const [percentageValue, setPercentageValue] = useState(80);
  const rotateValueHolder = useRef(new Animated.Value(0)).current;
  const halfRotateValueHolder = useRef(new Animated.Value(0)).current;
  const marginLeftHolder = useRef(new Animated.Value(0)).current;
  const springValue = useRef(new Animated.Value(1)).current;
  const [type, setType] = React.useState(1);
  const [userInfo, setUserInfo] = useState("");

  // const DashBoardReducers = useSelector(state => state.DashBoardReducers);
  const {quote} = props;
  ////////////HalfRoatate//////////////
  const startHalfImageRotateFunction = () => {
    halfRotateValueHolder.setValue(0);
    Animated.timing(halfRotateValueHolder, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  halfRotateData = halfRotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-30deg'],
  });
  const openDetailsProfileScreen = () => {
    startHalfImageRotateFunction();
    setTimeout(() => {
      navigation.navigate('ProfileDetailsScreen');
      halfRotateValueHolder.setValue(0);
    }, 200);
  };
  ////////////Spring//////////////
  const startSpring = () => {
    springValue.setValue(1.3);
    Animated.timing(springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
  };
  const openAccountInformation = () => {
    startSpring();
    setTimeout(() => {
      springValue.setValue(1);
      navigation.navigate('AccountDetailsScreen');
    }, 200);
  };

  ////////////FullRoatate//////////////
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const openSettingScreen = () => {
    startImageRotateFunction();
    setTimeout(() => {
      rotateValueHolder.setValue(0);
      navigation.navigate('SettingScreen');
    }, 400);
  };
  ////////////MarginLeft//////////////
  const startMarginLeft = () => {
    marginLeftHolder.setValue(0);
    Animated.timing(marginLeftHolder, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  const marginLeftData = marginLeftHolder.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });
  const logoutApp = () => {
    customButtonAlert(
      'Logout',
      'Do you really want to logout.?',
      'No',
      'Yes',
      data => {
        if (data) {
          clearAll()
          navigation.replace('Login');
        }
      },
    );
    startMarginLeft();
    setTimeout(() => {
      marginLeftHolder.setValue(0);
    }, 200);
  };


  // To Check User Login or Not
  useFocusEffect(
    React.useCallback(() => {
      console.log('Screen was focused');
    }, [type]),
  );
        useEffect(()=>{
          getData("userInfo").then(data=>{ 
          setUserInfo(data)
          })
          getData("userProfileInfo").then(data=>{
            console.log(data)
          })
        },[])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Text>{props.quote}</Text> */}
        <View style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <Image
              style={styles.profileImgCss}
              source={require('src/images/ProfileScreen/ProfileImg.png')}
            />
            <AnimatedCircularProgress
              size={150}
              width={5}
              fill={percentageValue}
              rotation={360}
              tintColor="#2A9818"
              backgroundColor="#D2D2D2"
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -15,
            }}>
            <Text style={styles.percentageCss}> {percentageValue}%</Text>
          </View>
          <Text style={styles.nameCss}>{userInfo&&userInfo.username}</Text>
          <Text style={styles.emailCss}>{userInfo&&userInfo.email}</Text>
        </View>
        <View style={{flex: 1}}></View>
        <View style={styles.profileBgCss}>
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            onPress={() => openDetailsProfileScreen()}>
            <View style={{flexDirection: 'row'}}>
              <Animated.View style={{transform: [{rotate: halfRotateData}]}}>
                <ProfileIcon />
              </Animated.View>
              <Text style={styles.profileTextCss}>Profile</Text>
            </View>
            <Right_arrow />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
            onPress={() => openAccountInformation()}>
            <View style={{flexDirection: 'row'}}>
              <Animated.View style={{transform: [{scale: springValue}]}}>
                <Work />
              </Animated.View>
              <Text style={styles.profileTextCss}>Account Informations</Text>
            </View>
            <Right_arrow />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
            onPress={() => openSettingScreen()}>
            <View style={{flexDirection: 'row'}}>
              <Animated.View style={{transform: [{rotate: rotateData}]}}>
                <Settings />
              </Animated.View>
              <Text style={styles.profileTextCss}>Settings</Text>
            </View>
            <Right_arrow style={{justifyContent: 'flex-end'}} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
            onPress={() => logoutApp()}>
            <View style={{flexDirection: 'row'}}>
              <Animated.View
                style={{marginLeft: marginLeftData, flexDirection: 'row'}}>
                <Exit />
                <Text style={styles.profileLogoutTextCss}>Logout</Text>
              </Animated.View>
            </View>
            <Right_arrow />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default ProfileScreen;
