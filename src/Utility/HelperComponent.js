import {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
import Helper from 'src/Utility/Helper';
import {useNavigation} from '@react-navigation/native';
import {Alert, Platform, Keyboard, ToastAndroid} from 'react-native';

export const HelperComponent = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //for check internet
  const CheckInternetConnection = async callBack => {
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
  //For no internet
  const popUpNoInternet = () => {
    setTimeout(() => {
      Alert.alert(
        'No Internet',
        'Oops! It seems that you are not connected to the internet. Please check your internet connection and try again.',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
        {cancelable: false},
      );
    }, 100);
  };
  const checkLoginStatus = async params => {
    getData('auth_token').then(data => {
      if (data) {
        console.log('Login');
      } else {
        navigation.replace('Login');
      }
    });
  };
  const clearAll = async params => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
  };

  const customButtonAlert = (title, alertMessage, cancelText, okText, cb) => {
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
      {cancelable: false},
    );
  };
  //set data for storage
  const setData = async (key, val) => {
    try {
      let tempval = JSON.stringify(val);
      await AsyncStorage.setItem(key, tempval);
    } catch (error) {
      console.error('------error: ', error);
    }
  };
  //for get data
  const getData = async key => {
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
  };

  //Capitalize first char
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const CapitalizeAll = str => {
    const arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(' ');
    return str2;
  };


  return {
    checkLoginStatus,
    clearAll,
    customButtonAlert,
    setData,
    getData,
    CheckInternetConnection,
    popUpNoInternet,
    Capitalize,
    CapitalizeAll
  };
};
