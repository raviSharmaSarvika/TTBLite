import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView, Image,SafeAreaView} from 'react-native';
import styles from './styles';

export default function RequestDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.headerTextCss}>Request ID : OT032111030001</Text>
          {/* First Row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.textHeadingStyle]}>Time Remaining</Text>
            <Text style={styles.textHeadingStyle}>Status</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text
              style={[styles.textStyle, {color: '#0C7C32', fontWeight: '700'}]}>
              0 Days 0 Hours 0 Minutes{' '}
            </Text>
            <Text
              style={[styles.textStyle, {color: '#BF1A1A', fontWeight: '700'}]}>
              Open
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              padding: 15,
              margin: -18,
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.textHeadingStyle]}>Request Type</Text>
            <Text style={styles.lightText}>Online Tutoring</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.textHeadingStyle]}>Student Type</Text>
            <Text style={styles.lightText}>Student (K-12)</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.textHeadingStyle]}>Subject</Text>
            <Text style={styles.lightText}>Business - Economics</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.textHeadingStyle]}>Scheduled Date & Time</Text>
            <Text style={[styles.lightText, {width:180}]}>
              05 Nov 2021 03:00 PM Chennai, Kolkata, Mumbai, New Delhi
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.textHeadingStyle]}>Duration</Text>
            <Text style={styles.lightText}>30 Minute(s)</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              padding: 15,
              margin: -18,
            }}
          />
          <View>
            <Text style={[styles.textHeadingStyle, {textAlign: 'left'}]}>
              Request Details
            </Text>
            <Text style={styles.detailCss}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fermentum laoreet metus integer tellus non cursus quis. Mattis
              nisl scelerisque morbi diam elementum tincidunt vitae. Scelerisque
              eleifend quis a in est tellus nibh tempor enim.{' '}
            </Text>
            <Text
              style={[
                styles.textHeadingStyle,
                {textAlign: 'left', marginTop: 12},
              ]}>
              Request file attached by you
            </Text>
            <Image
            style={styles.pdfCss}
            source={require("src/images/HomeScreen/pdfDownload.png")}
            />
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              padding: 15,
              margin: -18,
            }}
          />
          <View>
            <Text style={[styles.textHeadingStyle, {textAlign: 'left'}]}>
              Timeline
            </Text>
            <Image
            style={styles.bookCss}
            source={require("src/images/HomeScreen/openBook.png")}
            />
            <Text style={styles.detailCss}>
            Request submitted on 03 Nov 2021 at 04:43 PM.
            </Text>
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
