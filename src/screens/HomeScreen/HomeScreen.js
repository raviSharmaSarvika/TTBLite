import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
  LogBox,
  Animated,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './styles';
import AccordionListItem from './AccordionListItem/AccordionListItem';
import {Button} from 'react-native-elements';
import Helper from 'src/Utility/Helper';
import {useSelector, useDispatch} from 'react-redux';
import {ContentLoading} from 'src/components/ContentLoading/ContentLoading';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {HomeScreenAxios} from '../../networking/HomeScreen/HomeScreenApi';
import I18n from '../../I18n';
import moment from 'moment';
import {HelperComponent} from 'src/Utility/HelperComponent';
function HomeScreen() {
  const navigation = useNavigation();
  const {response, loading, error, fetchData} = HomeScreenAxios();
  const { checkLoginStatus } = HelperComponent();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [userData, setUserData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const scrolling = useRef(new Animated.Value(0)).current;
  const [currentDate, setCurrentDate] = useState(new Date(Date.now()));
  const {userRequestData} = useSelector(state => state.RequestClass);
  const {userNotificationData} = useSelector(state => state.Notification);
  const [type, setType] = React.useState(1);
  const translation = scrolling.interpolate({
    inputRange: [0, 70],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  useEffect(() => {
    getDataList();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  ///Swipe down to refresh data function
  function onRefresh() {
    setRefreshing(true);
    dummyData();
    setRefreshing(false);
    checkLoginStatus()
    getDataList();

  }

  const getDataList = () => {
    setIsLoading(true);
    let data = {
      per_page: 10,
      page: 1,
      sort_by: 'session_time_utc',
      sort_order: 'desc',
    };
    fetchData(data).finally(() => {
      setIsLoading(false);
    });
  };

  ///Dummy data
  var deviceHeight = Dimensions.get('window').width / 1.1;

  const dummyData = () => {
    deviceHeight = deviceHeight.toFixed(1);
    for (var i = 0; i < deviceHeight.length; i++) {
      rowData.push(i);
    }
    setRowData(rowData => [...rowData]);
  };
  useEffect(() => {
    dummyData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
     checkLoginStatus();
    }, [type]),
  );
  const renderData = ({item, index}) => {
    return (
      <View
        key={index}
        style={[
          styles.flatListDataCss,
          {
            borderLeftColor:
              item.request_type === '2'
                ? '#F6E990'
                : item.request_type === '1'
                ? '#FEB5C8'
                : '#7cc4ff',
            shadowColor: '#2c6fcd',
          },
        ]}>
        <View animation={'fadeInUp'}>
          <AccordionListItem
            Loading={isLoading}
            refreshing={refreshing}
            item={item}
            title={item.title}
            navigation={navigation}
            history={I18n.t('subject',{Subject:item.subject})}
            dueDate={ I18n.t('DueDate&Time',{DueTime:moment(item.session_time).format('MMMM Do YYYY, h:mm A')})}>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <View style={[styles.timerCss, {marginLeft: 0}]}>
                <Image
                  style={styles.miniIcons}
                  source={require('src/images/RequestScreen/person.png')}
                />
                <Text style={styles.timerTextCss}>{item.tutor_avatar}</Text>
              </View>
              <View style={styles.timerCss}>
                <Image
                  style={styles.miniIcons}
                  source={require('src/images/RequestScreen/assignment.png')}
                />
                <Text style={styles.timerTextCss}>
                  {item.request_details === undefined
                    ? ''
                    : item.request_details.student_detail.school_standard}
                </Text>
              </View>

              <View style={styles.timerCss}>
                <Image
                  style={styles.miniIcons}
                  source={require('src/images/access_time.png')}
                />
                <Text style={styles.timerTextCss}>{item.duration}</Text>
              </View>
              <View style={styles.timerCss}>
                <Image
                  style={styles.miniIcons}
                  source={require('src/images/RequestScreen/dollar.png')}
                />
                <Text style={styles.timerTextCss}>
                  {item.request_status === 'Confirmed' ? 'Paid' : null}{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width:'100%'
              }}>
              <Button
                title={I18n.t("BTJoin")}
                titleStyle={[styles.buttonTextCss, {color: '#ffffff'}]}
                buttonStyle={styles.loginButtonCss}
                containerStyle={styles.buttonContainer}
              />
              <Button
                title={I18n.t("BTRelease")}
                titleStyle={styles.buttonTextCss}
                buttonStyle={[
                  styles.loginButtonCss,
                  {backgroundColor: '#F2F2F2'},
                ]}
                containerStyle={[styles.buttonContainer,{ }]}
              />
            </View>
          </AccordionListItem>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ScrollView style={{flex: 1}}>
          <ContentLoading
            backgroundColor={'#ccc'}
            height={80}
            margin={8}
            borderRadius={8}
          />
          <ContentLoading
            backgroundColor={'#ccc'}
            height={8}
            margin={12}
            width={'25%'}
            marginTop={2}
            borderRadius={2}
          />
          {rowData.map(item => (
            <View style={[styles.flatListDataCss, {borderLeftWidth: 0}]}>
              <ContentLoading
                backgroundColor={'#ccc'}
                height={8}
                margin={12}
                width={'35%'}
                marginTop={2}
                borderRadius={2}
              />
              <ContentLoading
                backgroundColor={'#ccc'}
                height={8}
                margin={12}
                width={'45%'}
                marginTop={0}
                borderRadius={2}
              />
              <ContentLoading
                backgroundColor={'#ccc'}
                height={8}
                margin={12}
                width={'20%'}
                marginTop={2}
                borderRadius={2}
              />
              <ContentLoading
                backgroundColor={'#ccc'}
                height={8}
                margin={12}
                width={'45%'}
                marginTop={2}
                borderRadius={2}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <Animated.ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          stickyHeaderIndices={[1]}
          nestedScrollEnabled={true}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrolling,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}>
          <Animated.View
            style={{transform: [{scale: translation}], opacity: translation}}>
            <ImageBackground
              fadeDuration={800}
              imageStyle={{borderRadius: 8}}
              style={[styles.notificationBgCss]}
              source={require('src/images/HomeScreen/notificationBg.png')}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Notifications')}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={styles.messageCss}>
                      {userNotificationData.length.toString()}
                    </Text>
                    <Text
                      style={[styles.messageCss, {marginTop: 5, fontSize: 12}]}>
                      {I18n.t('unread notification')}
                    </Text>
                  </View>
                  <Image
                    style={styles.notificationCss}
                    source={require('src/images/HomeScreen/notification.png')}
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </Animated.View>
          <View style={styles.fliterBarCss}>
            <Text style={[styles.totalClassCss]}>
              {I18n.t('request', {
                Request: response && response.length.toString(),
              })}
            </Text>
          </View>
          <Animated.FlatList
            contentContainerStyle={{flex: 1}}
            data={response&&response}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            renderItem={(item, index) => renderData(item, index)}
            onEndReachedThreshold={5} // so when you are at 5 pixel from the bottom react run onEndReached function
            initialNumToRender={8}
          />
          {response === undefined ? (
            <Text style={{textAlign: 'center', justifyContent: 'center'}}>
              {I18n.t('noDataFound')}
            </Text>
          ) : null}
          <View
            style={{
              backgroundColor: '#2c6fcd',
              opacity: 0.1,
              textAlign: 'center',
              height: 5,
            }}></View>
        </Animated.ScrollView>
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;
