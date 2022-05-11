import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {HelperComponent} from 'src/Utility/HelperComponent';
import styles from './styles';

const ProfileDetailsScreen = props => {
  const {getData} = HelperComponent();
  const [userInfo, setuUserInfo] = useState('');
  const [profileInfo, setProfileInfo] = useState('');

  useEffect(() => {
    getData('userInfo').then(data => {
      setuUserInfo(data);
    });
    getData('userProfileInfo').then(data => {
      setProfileInfo(data);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.headerTextCss}>
          Personal Info {props.percentageValue}
        </Text>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.logoCss}
              source={require('src/images/ProfileScreen/school.png')}
            />
            <Text style={styles.headingTextCss}>Student</Text>
          </View>
          <Text style={[styles.textCss]}>
            {profileInfo && profileInfo.school_standard}
          </Text>

          {/* //////////////////////////////// */}
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.EmailCss}
              source={require('src/images/ProfileScreen/email.png')}
            />
            <Text style={[styles.headingTextCss, {marginLeft: 12}]}>Email</Text>
          </View>
          <Text style={styles.textCss}>{userInfo && userInfo.email}</Text>
          {/* //////////////////////////////// */}
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.logoCss}
              source={require('src/images/ProfileScreen/language.png')}
            />
            <Text style={styles.headingTextCss}>Preferred Languages</Text>
          </View>
          <Text>
          {userInfo &&
            userInfo.languages.map((item, index) => (
              <View key={index}>
                <Text style={styles.textCss}>{item.native_name}</Text>
              </View>
            ))}
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileDetailsScreen;
