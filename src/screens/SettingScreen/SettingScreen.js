import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button} from 'react-native-elements';
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
    .required('Password is required').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});
export default function SettingScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'English', value: 'Eng'},
    {label: 'Hindi', value: 'Hin'},
    {label: 'French', value: 'Fre'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{email: '', password:''}}
        validateOnMount={true}
        validationSchema={loginValidationSchema}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <ScrollView nestedScrollEnabled={true}>
            <View style={styles.subContainer}>
              <Text style={styles.headerTextCss}>General Settings</Text>
              <Text style={[styles.textStyle, {marginTop: 8}]}>
                Avatar Name
              </Text>
              <View style={styles.sectionStyle}>
                <TextInput
                  placeholderTextColor={'grey'}
                  style={styles.textInputCss}
                  placeholder="Avatar Name"
                  underlineColorAndroid="transparent"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {errors.email&&touched.email&&
                <Text style={{color:'red',}}>{errors.email}</Text>
                }
              <Text style={[styles.textStyle, {marginTop: 8}]}>Email ID</Text>
              <View style={styles.sectionStyle}>
                <TextInput
                  placeholderTextColor={'grey'}
                  style={styles.textInputCss}
                  keyboardType={'email-address'}
                  placeholder="Email@address.com"
                  underlineColorAndroid="transparent"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
               
              </View>
               {errors.password&&touched.password&&
                <Text style={{color:'red',marginTop:5}}>{errors.password}</Text>
                }
              <Text style={[styles.textStyle, {marginTop: 8}]}>
                Preferred Languages
              </Text>
              <View style={{flexDirection: 'row'}}>
                <DropDownPicker
                  nestedScrollEnabled
                  placeholder="Preferred Languages"
                  placeholderStyle={{
                    color: 'grey',
                    opacity: 0.8,
                  }}
                  containerStyle={{
                    zIndex: 10000,
                  }}
                  style={styles.schoolDropDownCss}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  listMode="SCROLLVIEW"
                />
              </View>
            </View>

            <View
              style={[
                styles.subContainer,
                {position: 'relative', zIndex: -1000},
              ]}>
              <Text style={styles.headerTextCss}>Manage Password</Text>
              <Text style={[styles.textStyle, {marginTop: 8}]}>
                Current Password
              </Text>
              <View style={styles.sectionStyle}>
                <TextInput
                  placeholderTextColor={'grey'}
                  style={styles.textInputCss}
                  secureTextEntry={true}
                  placeholder="Current Password"
                  underlineColorAndroid="transparent"
                />
              </View>
              <Text style={[styles.textStyle, {marginTop: 8}]}>
                New Password
              </Text>
              <View style={styles.sectionStyle}>
                <TextInput
                  placeholderTextColor={'grey'}
                  style={styles.textInputCss}
                  secureTextEntry={true}
                  placeholder="New Password"
                  underlineColorAndroid="transparent"
                />
              </View>
              <Text style={[styles.textStyle, {marginTop: 8}]}>
                Confirm Password
              </Text>
              <View style={styles.sectionStyle}>
                <TextInput
                  placeholderTextColor={'grey'}
                  style={styles.textInputCss}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button
                disabled={!isValid}
                  title="Submit"
                  titleStyle={[styles.buttonTextCss, {color: '#ffffff'}]}
                  buttonStyle={styles.loginButtonCss}
                  containerStyle={styles.buttonContainer}
                />
                <Button
                  title="Reset"
                  titleStyle={styles.buttonTextCss}
                  buttonStyle={[
                    styles.loginButtonCss,
                    {backgroundColor: '#F2F2F2'},
                  ]}
                  containerStyle={styles.buttonContainer}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
}
