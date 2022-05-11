import React, {useEffect} from 'react';
import {
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import Helper from 'src/Utility/Helper'
import {HelperComponent} from 'src/Utility/HelperComponent';

export default function SpalshScreen({navigation}) {
  const { getData } = HelperComponent();
  useEffect(()=>{
  getData("auth_token").then(data=>{
      setTimeout(() => {
      if(data)
      {
        navigation.replace('BottomTab');
      }
      else{
        navigation.replace('Login');
      }
    }, 5000);
    }
      )
  },[])
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#2c6fcd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        fadeDuration={3000}
        source={require('../images/TTB.png')}
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          width: 150,
          height: 51,
        }}
      />
      <ActivityIndicator style={{marginTop: 10}} size="small" color="#ffffff" />
    </SafeAreaView>
  );
}
