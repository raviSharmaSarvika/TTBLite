import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Animatable from 'react-native-animatable';

export default function Login(props, {navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [animationType,setAnimationtype]=useState("fadeInUp")
  const [items, setItems] = useState([
    {label: 'Excel High School', value: 'EXSchool'},
    {label: 'Excel School', value: 'School'},
    {label: 'High School', value: 'EX'},
  ]);

  const backToLogin = () => {
  
    setAnimationtype("fadeOutDown")
    setTimeout(()=>{
      setValue('');
      props.setChangeLoginStatus(false);
    },300)
  
  };
  const loginUser = () => {
    // if (!value) {
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Select your school first',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.BOTTOM,
    //     25,
    //     50,
    //   );
    //   return false;
    // }
    props.navigation.replace('BottomTab');
  };
  return (
    <Animatable.View style={styles.container} animation={animationType} easing={"ease-out-back"}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={{flex: 1}}></View>
        <View>
          <Image
            source={require('src/images/TTB.png')}
            style={styles.ttbLogoCss}
            fadeDuration={1000}
          />
          <Image
            resizeMethod="resize"
            resizeMode="repeat"
            style={styles.svgCss}
            source={require('src/images/Frame.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            flex: 2,
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderColor:'#ffffff'
          }}>
          <ScrollView>
            <SafeAreaView style={styles.loginFormCss}>
              <TouchableOpacity
                style={{flexDirection: 'row', marginLeft: 0}}
                onPress={() => backToLogin()}>
                <Image
                  style={styles.backArrow}
                  source={require('src/images/backArrow.png')}
                />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>

              <Text style={[styles.textCss, {marginTop: 20}]}>
                Login With School
              </Text>
              <DropDownPicker
                placeholder="Select School"
                style={styles.schoolDropDownCss}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                dropDownDirection={'BOTTOM'}
                setValue={setValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                onChangeValue={(value, index) => {
                  setValue(value);
                }}
              />
              <Button
                onPress={() => loginUser()}
                title="Continue"
                titleStyle={styles.buttonTextCss}
                buttonStyle={styles.loginButtonCss}
                containerStyle={styles.buttonContainer}
              />
            </SafeAreaView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={styles.termsCss}>
                Terms and Conditions - Privacy Policy
              </Text>
              <Text
               style={[styles.termsCss,{marginTop:5}]}>
                ©2021 Train The Brain, Inc. All Right Reserved.
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* <View style={{flex: 1}}></View>

      <View >
        
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <ScrollView>
          
        </ScrollView>
      </View> */}
    </Animatable.View>
  );
}
