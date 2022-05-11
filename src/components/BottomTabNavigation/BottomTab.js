import React, { useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/HomeScreen/HomeScreen';
import ClassesScreen from 'src/screens/ClassesScreen/ClassesScreen';
import ProfileScreen from 'src/screens/ProfileScreen/ProfileScreen';
import RequestScreen from 'src/screens/RequestScreen/RequestScreen';
import {Image, View, TouchableOpacity,Text} from 'react-native';
import styles from './styles';
import Home_active from 'src/images/TabImages/Home_active.svg';
import Home_inactive from 'src/images/TabImages/Home_inactive.svg';
import Request_active from 'src/images/TabImages/Request_active.svg';
import Request_inactive from 'src/images/TabImages/Request_inactive.svg';
import Classes_active from 'src/images/TabImages/Classes_active.svg';
import Classes_inactive from 'src/images/TabImages/Classes_inactive.svg';
import Profile_active from 'src/images/TabImages/Profile_active.svg';
import Profile_inactive from 'src/images/TabImages/Profile_inactive.svg';
import { useSelector,useDispatch,connect } from 'react-redux';
import {Badge} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomTab(props) {
const navigation =useNavigation();
  const {userNotificationData}=useSelector(state=>state.Notification)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {},
        headerLeft: () => (
          <TouchableOpacity activeOpacity={0.7} style={{marginLeft:10}}
            onPress={() => navigation.replace("BottomTab")}>
            <Image
              style={styles.headerLogoCss}
              source={require('src/images/TTBHeaderLogo.png')}
            />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Text></Text>
        ),
        headerRight: () => (
          <View style={styles.headerCss}>
            <TouchableOpacity
            activeOpacity={0.8}
              onPress={() => navigation.navigate('Notifications')}>
              <Image
                style={styles.notificationCss}
                source={require('src/images/NotificationIcon.png')}
              />
              <Badge
              status="error"
              containerStyle={{ position: 'absolute', top: -4, right: 10 }}
              value={userNotificationData.length.toString()}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={styles.profileCss}
                source={require('src/images/ProfileIcon.png')}
              />
            </TouchableOpacity>
          </View>
        ),
      }}>
      <Tab.Screen
        options={{
          tabBarLabelStyle:styles.tabBarTextCss,
          tabBarIcon: tabInfo => {
            return tabInfo.focused ? (
              <View>
                <View style={styles.bottomTabImgActive}>
                  <Home_active />
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.bottomTabImgActive}>
                  <Home_inactive />
                </View>
              </View>
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle:styles.tabBarTextCss,
          tabBarIcon: tabInfo => {
            return tabInfo.focused ? (
              <View>
                <View style={styles.bottomTabImgActive}>
                  <Request_active />
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.bottomTabImgActive}>
                  <Request_inactive />
                </View>
              </View>
            );
          },
        }}
        name="Request"
        component={RequestScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle:styles.tabBarTextCss,
          tabBarIcon: tabInfo => {
            return tabInfo.focused ? (
              <View>
                <View style={styles.bottomTabImgActive}>
                  <Classes_active />
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.bottomTabImgActive}>
                  <Classes_inactive />
                </View>
              </View>
            );
          },
        }}
        name="Classes"
        component={ClassesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle:styles.tabBarTextCss,
          tabBarIcon: tabInfo => {
            return tabInfo.focused ? (
              <View>
                <View style={styles.bottomTabImgActive}>
                  <Profile_active />
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.bottomTabImgActive}>
                  <Profile_inactive />
                </View>
              </View>
            );
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}


export default BottomTab;

