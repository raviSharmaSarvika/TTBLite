import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Filter(props, {navigation}) {
  const refRBSheet = useRef();

  return (
    <RBSheet
      ref={props.refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={hp(55)}
      openDuration={260}
      customStyles={{
        container: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: '#FFFFFF',
        },

        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
    <ScrollView>
      <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Text
          style={styles.filterTitleCss}>
          Filter Classes
        </Text>
        <TouchableOpacity
          onPress={() => props.refRBSheet.current.close()}
          style={{padding: 5, marginTop: -6}}>
          <Text
            style={styles.cancelCss}>
            ✘
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterFormCss}>
        <Text style={styles.textCss}>Status</Text>
        <DropDownPicker
          placeholder="Select School"
          style={styles.schoolDropDownCss}
          open={props.statusOpen}
          value={props.statusValue}
          theme="LIGHT"
          items={props.statusItems}
          setOpen={props.setStatusOpen}
          setValue={props.setStatusValue}
          setItems={props.setStatusItems}
          listMode="SCROLLVIEW" 

        />
          <View style={{position:'relative',zIndex:-100,backgroundColor:"#ffffff"}}>
        <Text style={styles.textCss}>Class Type</Text>
        <DropDownPicker
          placeholder="Select School"
          style={styles.schoolDropDownCss}
          open={props.classOpen}
          dropDownDirection="BOTTOM"
          value={props.classValue}
          theme="LIGHT"
          items={props.classItems}
          setOpen={props.setClassOpen}
          setValue={props.setClassValue}
          setItems={props.setClassItems}
          listMode="SCROLLVIEW" 

        />
        </View>
        <View style={{position:'relative',zIndex:-10000,backgroundColor:"#ffffff"}}>
        <Text style={[styles.textCss, {marginTop: 8, color: '#000'}]}>
          Date
        </Text>
        <Text style={[styles.textCss, {marginBottom: -7, marginTop: 8}]}>
          From
        </Text>

        <TouchableOpacity
          style={styles.sectionStyle}
          onPress={() => props.setDateFromOpen(true)}>
          <Text style={styles.textCss}>{props.fromDate.toDateString()}</Text>
        </TouchableOpacity>

        <DatePicker
          modal
          mode="date"
          open={props.dateFromOpen}
          date={props.fromDate}
          onConfirm={date => {
            props.setDateFromOpen(false);
            props.setFromDate(date);
          }}
          onCancel={() => {
            props.setDateFromOpen(false);
          }}
        />

        <Text style={[styles.textCss, {marginTop: -15, marginBottom: -8}]}>
          To
        </Text>
        <TouchableOpacity
          style={styles.sectionStyle}
          onPress={() => props.setDateToOpen(true)}>
          <Text style={styles.textCss}>{props.ToValue.toDateString()}</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          open={props.dateToOpen}
          date={props.ToValue}
          onConfirm={date => {
            props.setDateToOpen(false);
            props.setToValue(date);
          }}
          onCancel={() => {
            props.setDateToOpen(false);
          }}
        />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Button
          onPress={() => props.refRBSheet.current.close()}
          title="Filter"
          titleStyle={[styles.buttonTextCss,{color:'#ffffff'}]}
          buttonStyle={styles.loginButtonCss}
          containerStyle={styles.buttonContainer}
        />
         <Button
          onPress={() => props.refRBSheet.current.close()}
          title="Reset"
          titleStyle={styles.buttonTextCss}
          buttonStyle={[styles.loginButtonCss,{backgroundColor:'#F2F2F2',}]}
          containerStyle={styles.buttonContainer}
        />
        </View>
        </View>

      </View>
      </SafeAreaView>
      </ScrollView>
    </RBSheet>
    
  );
}
