import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style';
import Icon  from 'react-native-vector-icons/Ionicons';
import LoginWithSchool from 'src/screens/LoginWithSchool/LoginWithSchool';
import {useSelector, useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {loginScreenAxios} from '../../networking/Login/LoginAPI';
import I18n from '../../I18n';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

let loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .required()
    .min(8, ({min}) => `Password must be ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});
export default function Login({navigation}) {
  const [changeLoginStatus, setChangeLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [animationType, setAnimationtype] = useState('fadeInUp');
  const {response, loading, error, fetchData} = loginScreenAxios();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.Loader);

  function changeLoginMethod() {
    setAnimationtype('fadeOutDown');

    setTimeout(() => {
      setChangeLoginStatus(true);
    }, 300);
  }
  const loginUser = () => {
    let data = {
      email: 'ravi.sharma@sarvika.com',
      password: 'raviSHARMA@83',
    };
    fetchData(data);
    // checkEmail();
    // if (emailIcon !== 'check') {
    //   Toast.showWithGravity(
    //     'Enter your correct email address',
    //     Toast.SHORT,
    //     Toast.BOTTOM);
    //   return false;
    // }
    // if (userPassword === '') {
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Enter your correct password',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.BOTTOM,
    //     25,
    //     50,
    //   );
    //   Toast.showWithGravity(
    //     'Enter your correct password',
    //     Toast.SHORT,
    //     Toast.BOTTOM);
    //   return false;
    // }

    // dispatch(handleLoggin(true));
    // let data = {
    //   email:  "ravi.sharma@sarvika.com",
    //   password: "raviSHARMA@83",
    // };
    // Helper.makeRequest({
    //   url:LoginAPI,
    //   data: data,
    //   method: 'POST',
    // })
    //   .then(data => {
    //     if (data !== false) {
    //       Helper.setData('auth_token', data.success.access_token);
    //       navigation.replace('BottomTab');
    //     }
    //   })
    //   .finally(() => {
    //     // dispatch(handleLoggin(false));
    //   });
  };

  useLayoutEffect(() => {
    if (changeLoginStatus === false) {
      setAnimationtype('fadeInUp');
    }
  }, [changeLoginStatus]);

  return (
    <View style={styles.container}>
      {changeLoginStatus === false ? (
        <Animatable.View
          style={styles.container}
          animation={animationType}
          easing={'ease-out-back'}>
          <View style={{flex: 1}}></View>
          <View>
            <Image
              source={require('src/images/TTB.png')}
              style={styles.ttbLogoCss}
              fadeDuration={1000}
            />
            <Image
              style={styles.svgCss}
              resizeMethod={'resize'}
              resizeMode={'repeat'}
              source={require('src/images/Frame.png')}
            />
          </View>
          <View
            style={{
              flex: 4,
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderWidth: 5,
              borderColor: '#ffffff',
            }}>
            <Formik
              initialValues={{email: '', password: ''}}
              validateOnMount={true}
              validationSchema={loginValidationSchema}
              onSubmit={values => loginUser(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
                isValid,
              }) => (
                <ScrollView>
                  <SafeAreaView style={styles.loginFormCss}>
                    <Text style={styles.welcomeTextCss}>
                      {I18n.t('greeting')}
                    </Text>
                    <Text style={[styles.textCss, {marginTop: 25}]}>
                      {I18n.t('email')}
                    </Text>
                    <View
                      style={[
                        styles.sectionStyle,
                        {backgroundColor: loading ? '#ddd' : '#fff'},
                      ]}>
                      <TextInput
                        style={styles.textInputCss}
                        // value={userEmail}
                        editable={!loading}
                        selectTextOnFocus={!loading}
                        placeholderTextColor={'grey'}
                        placeholder={I18n.t('emailPlaceholder')}
                        enablesReturnKeyAutomatically
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        // onChangeText={email => setUserEmail(email)}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                      />
                      <Icon
                        name={errors.email === undefined? 'checkmark-sharp': errors.email.length===24 ? 'close-sharp': 'at-sharp'}
                        size={22}
                        style={{marginRight:6}}
                        color={errors.email===undefined ? '#2c6fcd': errors.email.length===24 ?'red':'#2c6fcd'}
                      />
                    </View>
                    {errors.email && touched.email && (
                      <Text style={{color: 'red',marginTop:-22,marginBottom:15}}>{errors.email}</Text>
                    )}
                    <Text style={styles.textCss}>{I18n.t('password')}</Text>
                    <View
                      style={[
                        styles.sectionStyle,
                        {backgroundColor: loading ? '#ddd' : '#fff'},
                      ]}>
                      <TextInput
                        style={styles.textInputCss}
                        editable={!loading}
                        selectTextOnFocus={!loading}
                        placeholderTextColor={'grey'}
                        placeholder={I18n.t('passwordPlaceholder')}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={showPassword}
                        //value={userPassword}
                        enablesReturnKeyAutomatically
                        underlineColorAndroid="transparent"
                        //onChangeText={event => setUserPassword(event)}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                      />
                    
                        <Icon
                          name={showPassword?'eye-sharp':'eye-off-sharp'}
                          size={22}
                          style={{marginRight:6}}
                          color="#2c6fcd"
                          onPress={()=>setShowPassword(!showPassword)}
                        />
                 </View>
                    {errors.password && touched.password && (
                      <Text style={{color: 'red',marginTop:-22,marginBottom:25}}>{errors.password}</Text>
                    )}
                    <TouchableOpacity>
                      <Text style={styles.forgotPass}>
                        {I18n.t('forgotPassword')}
                      </Text>
                    </TouchableOpacity>
                    <Button
                    // disabled={!isValid}
                      loading={loading}
                      // onPress={() => loginUser()}
                      onPress={handleSubmit}
                      title={I18n.t('login')}
                      titleStyle={styles.buttonTextCss}
                      buttonStyle={styles.loginButtonCss}
                      containerStyle={styles.buttonContainer}
                    />
                  </SafeAreaView>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 15,
                      marginRight: 15,
                    }}>
                    <View
                      style={{
                        backgroundColor: 'grey',
                        height: 1,
                        flex: 1,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        paddingHorizontal: 5,
                        fontSize: 15,
                        color: '#000000',
                      }}>
                      or
                    </Text>
                    <View
                      style={{
                        backgroundColor: 'grey',
                        height: 1,
                        flex: 1,
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => changeLoginMethod()}>
                      <Text style={styles.loginWithSchoolCss}>
                        {I18n.t('loginwithschool')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.termsCss}>{I18n.t('t&c')}</Text>
                    <Text
                      style={[
                        styles.termsCss,
                        {marginTop: 2, marginBottom: 10},
                      ]}>
                      {I18n.t('allRight')}
                    </Text>
                  </View>
                </ScrollView>
              )}
            </Formik>
          </View>
        </Animatable.View>
      ) : (
        <LoginWithSchool
          setChangeLoginStatus={setChangeLoginStatus}
          changeLoginStatus={changeLoginStatus}
          navigation={navigation}
        />
      )}
    </View>
  );
}
