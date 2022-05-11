import React from 'react';
import {View} from 'react-native';
import SpalshScreen from 'src/screens/SpalshScreen';
import Login from 'src/screens/Login/Login';
import LoginWithSchool from 'src/screens/LoginWithSchool/LoginWithSchool';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from 'src/components/BottomTabNavigation/BottomTab';
import SearchScreen from 'src/screens/SearchScreen/SearchScreen';
import Notification from 'src/screens/NotificationScreen/Notification';
import Home from 'src/screens/HomeScreen/HomeScreen';
import ProfileDetailsScreen from 'src/screens/ProfileScreen/ProfileDetailsScreen/ProfileDetailsScreen';
import AccountDetailsScreen from 'src/screens/AccountDetailsScreen/AccountDetails';
import SettingScreen from 'src/screens/SettingScreen/SettingScreen';
import HomeDetailsScreen from 'src/screens/HomeScreen/HomeDetailsScreen/HomeDetailsScreen';
import RequestDetailsScreen from 'src/screens/RequestScreen/RequestDetailsScreen/RequestDetailsScreen';
import DetailsScreen from 'src/components/DetailScreen/DetailsScreen';
import OnlineDetailsScreen from 'src/components/OnlineClassDetailScreen/OnlineDetails';

import { useFocusEffect } from '@react-navigation/native';

const MainStack = createNativeStackNavigator();
// setTimeout(()=>{
//   Helper.CheckInternetConnection(isNetConnected => {
//     if (isNetConnected) {
//       Helper.isNetConnected = true;
//     } else {
//       Helper.isNetConnected = false;
//     }
//   });
// },5000)




const Routes = () => {
 
  return (
    <MainStack.Navigator>
      <MainStack.Screen options={{headerShown:false}} name="SpalshScreen" component={SpalshScreen} />
      <MainStack.Screen options={{headerShown:false}}  name="Login" component={Login} />
      <MainStack.Screen options={{headerShown:false}}  name="Home" component={Home} />
      <MainStack.Screen options={{headerShown:false}} name="LoginWithSchool" component={LoginWithSchool} />
      <MainStack.Screen options={{headerShown:false}} name="SearchScreen" component={SearchScreen} />
      <MainStack.Screen options={{headerShown:false}} name="BottomTab" component={BottomTab} />
      <MainStack.Screen  options={{ headerTitleStyle:{fontSize:17} }} name="Notifications" component={Notification} />
      <MainStack.Screen options={{ title: 'Profile', headerTitleStyle:{fontSize:17} }} name="ProfileDetailsScreen" component={ProfileDetailsScreen} />
      <MainStack.Screen options={{ title: 'Account Information', headerTitleStyle:{fontSize:17} }} name="AccountDetailsScreen" component={AccountDetailsScreen} />
      <MainStack.Screen options={{ title: 'Settings', headerTitleStyle:{fontSize:17} }} name="SettingScreen" component={SettingScreen} />
      <MainStack.Screen options={{ title: 'Home Details', headerTitleStyle:{fontSize:17} }} name="HomeDetailsScreen" component={HomeDetailsScreen} />
      <MainStack.Screen options={{ title: 'Details', headerTitleStyle:{fontSize:17} }} name="DetailsScreen" component={DetailsScreen} />
      <MainStack.Screen options={{ title: 'Details', headerTitleStyle:{fontSize:17} }} name="OnlineDetails" component={OnlineDetailsScreen} />
      <MainStack.Screen options={{ title: 'Request Details', headerTitleStyle:{fontSize:17} }} name="RequestDetailsScreen" component={RequestDetailsScreen} />
    </MainStack.Navigator>
  );
};

export default Routes;
