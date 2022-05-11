import {useState, useEffect} from 'react';
import axios from 'axios';
import {DashBoardAPI} from '../../Utility/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
import {HelperComponent} from '../../Utility/HelperComponent';

import {useNavigation} from '@react-navigation/native';
export const HomeScreenAxios = () => {
  const navigation = useNavigation();
  const {getData, CheckInternetConnection, popUpNoInternet} = HelperComponent();
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async params => {
    var Connected = false;
    let token = await getData('auth_token');
    await CheckInternetConnection(isNetConnected => {
      if (isNetConnected === true) {
        Connected = true;
      } else {
        Connected = false;
      }
    });
    if (Connected) {
      setLoading(true);
      const options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Tenant-Id': 'dushyant70',
          Authorization: 'Bearer ' + token,
        },
      };
      const url =
        DashBoardAPI +
        'per_page=' +
        params.per_page +
        '&page=' +
        params.page +
        '&sort_by=' +
        params.sort_by +
        '&sort_order=' +
        params.sort_order;
      try {
        const result = await axios.get(url, options);
        if (result.status === 200) {
          setResponse(result.data.records.data);
          Toast.showWithGravity(
            'Data load successfully',
            Toast.SHORT,
            Toast.BOTTOM,
          );
        }
      } catch (error) {
        console.log(JSON.stringify(error.response.status));
        if (JSON.stringify(error.response.status) === '400') {
          Toast.showWithGravity(
            'Sever Error Try again later',
            Toast.SHORT,
            Toast.BOTTOM,
          );
        } else if (JSON.stringify(error.response.status) === '403') {
          // Toast.showWithGravity(
          //   "Check your email or password",
          //   Toast.SHORT,
          //   Toast.BOTTOM
          // );
        } else if (JSON.stringify(error.response.status) === '401') {

          Toast.showWithGravity(
            'Session expired login again',
            Toast.SHORT,
            Toast.BOTTOM,
          );
          AsyncStorage.removeItem('userdata');
          AsyncStorage.removeItem('auth_token');
        } else if (JSON.stringify(error.response.status) === '500') {
          Toast.showWithGravity(
            'Sever Error Try again later',
            Toast.SHORT,
            Toast.BOTTOM,
          );
          AsyncStorage.removeItem('userdata');
          AsyncStorage.removeItem('auth_token');
        } else if (JSON.stringify(error.response.status) === '404') {
          Toast.showWithGravity(
            'Sever Error Try again later',
            Toast.SHORT,
            Toast.BOTTOM,
          );
        } else {
          Toast.showWithGravity(
            'expired',
            Toast.SHORT,
            Toast.BOTTOM,
          );
          // AsyncStorage.removeItem("userdata");
          // AsyncStorage.removeItem("auth_token");
        }
      } finally {
        setLoading(false);
      }
    } else {
      popUpNoInternet();
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []); // execute once only

  return {response, error, loading, fetchData};
};
