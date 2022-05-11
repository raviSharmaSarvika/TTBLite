import React,{useState,useRef,useLayoutEffect, useEffect } from 'react';
import {View, Text, TouchableOpacity, Image,SafeAreaView,FlatList} from 'react-native';
import styles from './styles';
import {SearchBar} from 'react-native-elements';
import Filter from 'src/components/FilterComponent/Filter'

export default function SearchScreen({navigation,route,data}) {
  const [search, setSearch] = useState('');
  const [statusOpen, setStatusOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);
  const [dateFromOpen, setDateFromOpen] = useState(false);
  const [dateToOpen, setDateToOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [classValue, setClassValue] = useState(null);
  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [ToValue, setToValue] = useState(new Date(Date.now()));
  const [statusItems, setStatusItems] = useState([
    {label: 'Active', value: '1'},
    {label: 'Inactive', value: '2'},
  ]);
  const [classItems, setClassItems] = useState([
    {label: 'Active', value: '1'},
    {label: 'Inactive', value: '2'},
  ]);
 
  const refRBSheet = useRef();

  const updateSearch = search => {
    setSearch(search);
    console.log(search)
  };
console.log("data",data)
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{flexDirection: 'row', backgroundColor: '#ffffff', padding: 15,justifyContent:"space-between"}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 22, height: 22,marginRight:5}}
            source={require('src/images/backArrow.png')}
          />
        </TouchableOpacity>
        <SearchBar
          placeholder={"Search "+route.params.searchBy}
          containerStyle={styles.searchBarContainerCss} 
          inputContainerStyle={styles.searchBarInputContainerCss}
          inputStyle={styles.searchBarInputCss}
          onChangeText={updateSearch}
          value={search}
        />
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <Image
            style={{width: 22, height: 22}}
            source={require('src/images/tune.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Image
        source={require("src/images/search.png")}
        style={{width:40,height:40,resizeMode:'contain',marginBottom:20}}
        />
      <Text style={styles.searchTextCss}>Search {route.params.searchBy} by subject, id, type, student etc.</Text>

      </View>
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
