import React,{useEffect,useRef} from 'react';
import { Animated,View,Text } from 'react-native';

export const  ContentLoading =({backgroundColor,marginTop,width,height,margin,borderRadius,marginBottom,marginLeft,marginRight})=>{
    const opacity = useRef(new Animated.Value(0.3));
    useEffect(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(opacity.current, {
              toValue: 0.8,
              useNativeDriver: true,
              duration: 300,
            }),
            Animated.timing(opacity.current, {
              toValue: 0.5,
              useNativeDriver: true,
              duration: 800,
            }),
          ]),
        ).start();
      }, [opacity]);
      return <Animated.View   style={{opacity:opacity.current,backgroundColor,width, height,marginTop, margin,borderRadius,marginBottom,marginLeft,marginRight}}></Animated.View>
};

 
