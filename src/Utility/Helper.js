/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Alert, Platform, Keyboard,ToastAndroid } from 'react-native';
import {app_name} from './Config';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
export default class Helper extends React.Component {
  static isNetConnected = false;
  static device_token = {};
  
  //For alert message
  static alert(alertMessage, cb) {
    Alert.alert(
      app_name,
      alertMessage,
      [
        {
          text: 'OK',
          onPress: () => {
            if (cb) cb(true);
            console.log('OK Pressed');
          },
        },
      ],
      { cancelable: false },
    );
  }

  //For title alert
  static titleAlert(title, alertMessage, cb) {
    Alert.alert(
      title,
      alertMessage,
      [
        {
          text: 'OK',
          onPress: () => {
            if (cb) cb(true);
            console.log('OK Pressed');
          },
        },
      ],
      { cancelable: false },
    );
  }

  static confirmPopUp(alertMessage, cb) {
    Alert.alert(
      app_name,
      alertMessage,
      [
        { text: 'YES', onPress: () => { if (cb) cb(true); console.log('OK Pressed') } },
        { text: 'NO', onPress: () => { if (cb) cb(false); }, style: 'cancel' },
      ],
      { cancelable: false }
    )
  }

  static customButtonAlert(title, alertMessage, cancelText, okText, cb) {
    Alert.alert(
      title,
      alertMessage,
      [
        {
          text: cancelText,
          onPress: () => {
            if (cb) cb(false);
          },
          style: 'cancel',
        },
        {
          text: okText,
          onPress: () => {
            if (cb) cb(true);
            console.log('OK Pressed');
          },
        },
      ],
      { cancelable: false },
    );
  }

  //set data for storage
  static async setData(key, val) {
    try {
      let tempval = JSON.stringify(val);
      await AsyncStorage.setItem(key, tempval);
    } catch (error) {
      console.error('------error: ', error);
    }
  }
  //for get data
  static async getData(key) {
    try {
      let value = await AsyncStorage.getItem(key);
      if (value) {
        let newvalue = JSON.parse(value);
        return newvalue;
      } else {
        return value;
      }
    } catch (error) {
      console.error('------error: ', error);
    }
  }
  //remove all for storage
  static async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
  }

  //for check internet
  static CheckInternetConnection = async callBack => {
    await NetInfo.fetch()
      .then(state => {
        console.log('-----Internet Connection type: ', state.type);
        console.log('-----Internet is connected? ', state.isConnected);
        if (state.isConnected) {
          callBack(true);
        } else {
          callBack(false);
          console.log('-----Internet Connection type: ', state.type);
          console.log('-----Internet is connected? ', state.isConnected);
        }
      })
      .catch(error => {
        console.error('------Internet Connection error: ', error);
        callBack(false);
      });
  };

  static async makeRequest({ url, data, method = 'POST' }) {
    await Helper.CheckInternetConnection(isNetConnected => {
      if (isNetConnected) {
        Helper.isNetConnected = true;
      } else {
        Helper.isNetConnected = false;
      }
    });

    if (Helper.isNetConnected) {
      let finalUrl = url;

      let form;
      let methodnew;
      let token = await this.getData('auth_token');
      console.log(token, '  : tokentoken');
      let varheaders;

      if (method == 'POST') {
        methodnew = 'POST';
        if (token) {
          varheaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          };
        } else {
          varheaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Tenant-Id': 'dushyant70'
          };
        }
        form = JSON.stringify(data);
      }
      //Upload files
      else if (method == 'FILES') {
        methodnew = 'POST';
        if (token) {
          varheaders = {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          };
        } else {
          varheaders = {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          };
        }
      }
      //Put method
      else if (method == 'PUT') {
        methodnew = 'PUT';
        if (token) {
          varheaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          };
        } else {
          varheaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
        }
        form = JSON.stringify(data);
      } else {
        methodnew = 'GET';
        if (token) {
          varheaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Tenant-Id': 'dushyant70',
            Authorization: 'Bearer ' + token,
          };
        } else {
          varheaders = {
            Accept: 'application/json',
            'X-Tenant-Id': 'dushyant70',
            'Content-Type': 'application/json',
          };
        }
      }

      console.log('---------Api : ', varheaders);
      console.log('---------Api finalUrl: ', finalUrl);
      console.log('---------Api form: ', form);

      return fetch(finalUrl, {
        body: form,
        method: methodnew,
        headers: varheaders,
      })
      .then(response => {
        console.log(response)
        if(response.status===200)
        {
          // Toast.showWithGravity(
          //   'Login Successfully', 
          //   Toast.SHORT, 
          //   Toast.BOTTOM);
          return response.json();

        }
       else if(response.status===400)
        {
          Toast.showWithGravity(
            'Check your email or password',
            Toast.SHORT, 
            Toast.BOTTOM);
          AsyncStorage.removeItem('userdata');
          AsyncStorage.removeItem('auth_token');
          return false;
        }
        else if(response.status===403)
        {
          Toast.showWithGravity(
            'Check your email or password',
            Toast.SHORT, 
            Toast.BOTTOM);
          AsyncStorage.removeItem('userdata');
          AsyncStorage.removeItem('auth_token');
          return false;
        }
        else if(response.ststus===500)
        {
          Toast.showWithGravity(
            'Sever Error Try again later',
            Toast.SHORT,)
          AsyncStorage.removeItem('userdata');
          AsyncStorage.removeItem('auth_token');
          return false;
        }
        else if(response.ststus=== 404)
        {
          Toast.showWithGravity(
            'Sever Error Try again later', 
            Toast.SHORT, 
            Toast.BOTTOM);
          AsyncStorage.removeItem('userdata');
          AsyncStorage.removeItem('auth_token');
          return false;
        }
        else
        {
          Toast.showWithGravity(
            'Check your email or password',
            Toast.SHORT, 
            Toast.BOTTOM);
          AsyncStorage.removeItem('userdata');
          AsyncStorage.removeItem('auth_token');
          return false;
        }          
      }).catch(()=>{
        Toast.showWithGravity(
          'Sever error try again later',
          Toast.SHORT, 
          Toast.BOTTOM);
        AsyncStorage.removeItem('userdata');
        AsyncStorage.removeItem('auth_token');
        return false;
      })
    }
  }

  //For no internet
  static popUpNoInternet = () => {
    setTimeout(() => {
      Alert.alert(
        'No Internet',
        'Oops! It seems that you are not connected to the internet. Please check your internet connection and try again.',
        [
          {
            text: 'OK',
            onPress: () => { },
          },
        ],
        { cancelable: false },
      );
    }, 100);
  };


  //Get data from id
  //   static findCategoriesnamebyID = (findData, id, pName) => {
  //     return findData.find(data => data[pName] === id);
  //   };
}

