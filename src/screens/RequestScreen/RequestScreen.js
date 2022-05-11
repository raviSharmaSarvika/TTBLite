import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  ScrollView,
  RefreshControl,
  Dimensions,
} from 'react-native';

import {Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import I18n from '../../I18n';
import {RequestScreenAxios} from '../../networking/RequestScreen/RequestScreenApi';
import {ContentLoading} from 'src/components/ContentLoading/ContentLoading';
import styles from './styles';
import Filter from 'src/components/FilterComponent/Filter';
import AccordionListItem from './AccordionListItem/AccordionListItem';
export default function RequestScreen({navigation}) {
  const {response, loading, error, fetchData} = RequestScreenAxios();
  const refRBSheet = useRef();
  const [statusOpen, setStatusOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);
  const [dateFromOpen, setDateFromOpen] = useState(false);
  const [dateToOpen, setDateToOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [classValue, setClassValue] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [ToValue, setToValue] = useState(new Date(Date.now()));
  const scrolling = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const diffClamp = Animated.diffClamp(scrolling, -200, 80);
  const translation = diffClamp.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });
  const [statusItems, setStatusItems] = useState([
    {label: 'Active', value: '1'},
    {label: 'Inactive', value: '2'},
  ]);
  const [classItems, setClassItems] = useState([
    {label: 'Active', value: '1'},
    {label: 'Inactive', value: '2'},
  ]);
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
  function onRefresh() {
    setRefreshing(true);
    dummyData();
    setRefreshing(false);
    getDataList();

  }
  useEffect(()=>{
    getDataList();

  },[])
  const getDataList = () => {
    setIsLoading(true);
    let data = {
      per_page:10,
      page: 1,
      subject_id: '',
      sort_by: 'created_at',
      sort_order: 'desc',
      sub_status: '',
      q: '',
      request_type: '',
      archived: '',
      from_date: '',
      to_date: '',
      is_preferred: '',
      exclude_feedback: '',
    };
    fetchData(data).finally(() => {
      setIsLoading(false);
    });
  };
  // Rendering flatlist Items
  const renderData = ({item, index}) => {
    return (
      <View
        key={index}
        style={[
          styles.flatListDataCss,
          {
            borderLeftColor:
              item.request_type === 2
                ? '#F6E990'
                :'#FEB5C8',
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
            history={I18n.t('subject', {Subject: item.subject})}
            dueDate={I18n.t('DueDate&Time', {
              DueTime: moment(item.request_time_utc).format('MMMM Do YYYY, h:mm A'),
            })}>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <View style={[styles.timerCss, {marginLeft: 0}]}>
                <Image
                  style={styles.miniIcons}
                  source={require('src/images/RequestScreen/person.png')}
                />
                <Text style={styles.timerTextCss}>{item.tutor_username}</Text>
              </View>
              <View style={styles.timerCss}>
                <Image
                  style={styles.miniIcons}
                  source={require('src/images/RequestScreen/assignment.png')}
                />
                <Text style={styles.timerTextCss}>
                  {item.school_standard === undefined
                    ? ''
                    : item.school_standard}
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
                {/* <Image
                  style={styles.miniIcons}
                  source={require('src/images/RequestScreen/dollar.png')}
                /> */}
                <Text style={styles.timerTextCss}>
                  { item.sub_status }
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Button
                title={I18n.t('BTJoin')}
                titleStyle={[styles.buttonTextCss, {color: '#ffffff'}]}
                buttonStyle={styles.loginButtonCss}
                containerStyle={styles.buttonContainer}
              />
              <Button
                title={I18n.t('BTRelease')}
                titleStyle={styles.buttonTextCss}
                buttonStyle={[
                  styles.loginButtonCss,
                  {backgroundColor: '#F2F2F2'},
                ]}
                containerStyle={styles.buttonContainer}
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
      ) :(
        <>
      <Animated.View
        style={{
          transform: [{translateY: translation}],
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          backgroundColor: '#FBFCFE',
          shadowColor: '#2c6fcd',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.37,
          shadowRadius: 3.49,

          elevation: 8,
          elevation: 10,
          height: 80,

          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            position: 'relative',
          }}>
          {/* Filter Header */}
          <Text style={styles.headingTextCss}>My Requests</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SearchScreen', {searchBy: 'Request'})
              }>
              <Image
                style={{width: 20, height: 20, marginRight: 10}}
                source={require('src/images/search.png')}
              />
            </TouchableOpacity>
            {/* Filter Icon  */}
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <Image
                style={{width: 20, height: 20}}
                source={require('src/images/filter_list.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fliterBarCss}>
        <Text style={[styles.totalClassCss]}>
              {I18n.t('request', {
                Request: response && response.length.toString(),
              })}
          </Text>

          <View style={styles.newestCss}>
            <Image
              style={{width: 12, height: 12}}
              source={require('src/images/import_export.png')}
            />
            <Text style={styles.newestTextCss}>Newest First</Text>
          </View>
        </View>
      </Animated.View>
      {/*  Flatlist */}
      <FlatList
        data={response}
        contentContainerStyle={{paddingTop: 80}}
        keyExtractor={item => item.id}
        renderItem={(item, index) => renderData(item, index)}
        onScroll={e => {
          scrolling.setValue(e.nativeEvent.contentOffset.y);
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {/* </ScrollView> */}
      <View
        style={{
          backgroundColor: '#2c6fcd',
          opacity: 0.1,
          textAlign: 'center',
          height: 5,
        }}></View>
        </>
        )}
      {/* Sending Data to Filter Component */}
      <Filter
        refRBSheet={refRBSheet}
        statusOpen={statusOpen}
        statusValue={statusValue}
        statusItems={statusItems}
        setStatusOpen={setStatusOpen}
        setStatusValue={setStatusValue}
        setStatusItems={setStatusItems}
        classOpen={classOpen}
        classValue={classValue}
        classItems={classItems}
        setClassOpen={setClassOpen}
        setClassValue={setClassValue}
        setClassItems={setClassItems}
        setDateFromOpen={setDateFromOpen}
        fromDate={fromDate}
        dateFromOpen={dateFromOpen}
        setFromDate={setFromDate}
        setDateToOpen={setDateToOpen}
        dateToOpen={dateToOpen}
        ToValue={ToValue}
        setToValue={setToValue}
      />
    </SafeAreaView>
  );
}
