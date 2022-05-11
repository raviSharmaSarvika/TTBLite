import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import Routes from './src/navigation/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider, useSelector, useDispatch} from 'react-redux';
import Loader from './src/components/Loader/Loader';
import { useFocusEffect } from '@react-navigation/native';
const App = () => {
  const isLoading = useSelector(state => state.Loader);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#1b58b5'} />
      <Routes />
      {isLoading &&  
       <Loader/>
       } 
    </NavigationContainer>
  );
};
export default App;
