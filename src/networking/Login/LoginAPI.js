import {useState, useEffect} from 'react';
import axios from 'axios';
import {LoginAPI} from '../../Utility/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
import {HelperComponent} from '../../Utility/HelperComponent';
import {useNavigation} from '@react-navigation/native';
import { UserInformationAxios } from '../../networking/UserInformation/UserInformationApi';
export const loginScreenAxios = () => {
  const navigation = useNavigation();
  const {fetchUserInformation} =UserInformationAxios()
  const {getData, CheckInternetConnection, popUpNoInternet,setData} = HelperComponent();
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async params => {
    var Connected = false;
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
        },
      };
      try {
        const result = await axios.post(LoginAPI, params, options);
        if (result.status === 200) {
          console.log(result.data);
          setResponse(JSON.stringify(result.data.success));
          setData('auth_token', result.data.success.token);
          Toast.showWithGravity(
            'Login Successfully',
            Toast.SHORT,
            Toast.BOTTOM,
          );
          fetchUserInformation()
        }
      } catch (error) {
        console.log(JSON.stringify(error.response.status));
        if (JSON.stringify(error.response.status) === '400') {
          Toast.showWithGravity(
            'Sever Error Try again later',
            Toast.SHORT,
            Toast.BOTTOM,
          );
          setResponse('');
        } else if (JSON.stringify(error.response.status) === '403') {
          Toast.showWithGravity(
            'Check your email or password',
            Toast.SHORT,
            Toast.BOTTOM,
          );
          setResponse('');
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
          // AsyncStorage.removeItem("userdata");
          // AsyncStorage.removeItem("auth_token");
          setResponse('');
        } else if (JSON.stringify(error.response.status) === '404') {
          Toast.showWithGravity(
            'Sever Error Try again later',
            Toast.SHORT,
            Toast.BOTTOM,
          );
          setResponse('');
        } else {
          Toast.showWithGravity(
            'Server error try again later',
            Toast.SHORT,
            Toast.BOTTOM,
          );
        }
      } finally {
        setLoading(false);
      }
    } else {
      popUpNoInternet();
    }
  };

  //   useEffect(() => {
  //     fetchData(axiosParams);
  //   }, []); // execute once only

  return {response, error, loading, fetchData};
};
