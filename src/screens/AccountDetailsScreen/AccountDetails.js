import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';
import {HelperComponent} from 'src/Utility/HelperComponent';

export default function AccountDetailsScreen() {
  const {getData,Capitalize,CapitalizeAll} = HelperComponent();
  const [userInfo, setuUserInfo] = useState('');
  useEffect(() => {
    getData('userInfo').then(data => {
      setuUserInfo(data);
    });
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: '100%'}}>
        <View style={styles.subContainer}>
          <Text style={styles.headerTextCss}>Personal Info</Text>
          {/* First Row */}
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textHeadingStyle]}>First Name</Text>
            <Text
              style={[
                styles.textHeadingStyle,
                {textAlign: 'left', marginLeft: 80},
              ]}>
              Last Name
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textStyle]}>
              {Capitalize(userInfo && userInfo.first_name)}
            </Text>
            <Text
              style={[styles.textStyle, {textAlign: 'left', marginLeft: 80}]}>
              {Capitalize(userInfo && userInfo.last_name)}
            </Text>
          </View>

          {/* Second Row */}
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textHeadingStyle]}>Gender</Text>
            <Text
              style={[
                styles.textHeadingStyle,
                {textAlign: 'left', marginLeft: 80},
              ]}>
              Phone
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textStyle]}>
              {Capitalize(userInfo && userInfo.gender)}
            </Text>
            <Text
              style={[styles.textStyle, {textAlign: 'left', marginLeft: 80}]}>
              {userInfo && userInfo.primary_phone}
            </Text>
          </View>

          {/* Third Row */}
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textHeadingStyle]}>Address Line 1</Text>
            <Text
              style={[
                styles.textHeadingStyle,
                {textAlign: 'left', marginLeft: 80},
              ]}>
              Address Line 2
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textStyle]}>
              {CapitalizeAll(userInfo && userInfo.address1)}
            </Text>
            <Text
              style={[styles.textStyle, {textAlign: 'left', marginLeft: 80}]}>
              {CapitalizeAll(userInfo && userInfo.address2)}
            </Text>
          </View>

          {/* Fourth Row */}
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textHeadingStyle]}>Country</Text>
            <Text
              style={[
                styles.textHeadingStyle,
                {textAlign: 'left', marginLeft: 80},
              ]}>
              State/Province
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textStyle]}>
              {CapitalizeAll(userInfo && userInfo.country)}
            </Text>
            <Text
              style={[styles.textStyle, {textAlign: 'left', marginLeft: 80}]}>
              {CapitalizeAll(userInfo && userInfo.state)}
            </Text>
          </View>

          {/* Fifth Row */}
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textHeadingStyle]}>City</Text>
            <Text
              style={[
                styles.textHeadingStyle,
                {textAlign: 'left', marginLeft: 80},
              ]}>
              Zip/Postal
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textStyle]}>{CapitalizeAll(userInfo && userInfo.city)}</Text>
            <Text
              style={[styles.textStyle, {textAlign: 'left', marginLeft: 80}]}>
              {userInfo && userInfo.pincode}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
