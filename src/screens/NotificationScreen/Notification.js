import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { useSelector,useDispatch } from 'react-redux';
export default function Notification() {
  const {userNotificationData}=useSelector(state=>state.Notification)
  const renderItem = ({item}) => {
    return (
      <SafeAreaView style={styles.flatListDataCss}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.logoCss}
            source={require('src/images/notificationLogo.png')}
          />
          <View>
            <Text
              style={styles.titleCss}>
              {item.title}
            </Text>
            <Text
              style={styles.messageCss}>
              {item.message}
            </Text>
          </View>
        </View>
        <Text
          style={styles.timerDetailsCss}>
          {item.day} days {item.hour} Hours {item.minutes} minutes ago
        </Text>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 12}}>
        <FlatList
          data={userNotificationData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={{backgroundColor:'#2c6fcd',opacity:0.1,textAlign:'center',height:5}}></View>

      <View
        style={{flex: 1, backgroundColor: '#EEF0FA', justifyContent: 'center'}}>
        <TouchableOpacity>
          <Text
            style={styles.readAllText}>
            Mark all as read
          </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
