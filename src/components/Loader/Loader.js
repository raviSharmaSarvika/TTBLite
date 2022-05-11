import React from 'react';
import {View,ActivityIndicator} from 'react-native';


export default function Loader()
{
    return(
        <View  style={{position:'absolute',left:0,right:0,top:0,bottom:0,zIndex:10000000,backgroundColor:'#fff',opacity:0.5,}}>
            <ActivityIndicator
            style={{position:'absolute',left:0,right:0,top:0,bottom:0,zIndex:10000000}}
            size={'large'}
            color={"#000"}
            />
        </View>
    )
} 