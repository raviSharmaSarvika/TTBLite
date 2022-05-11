import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";
import styles from "./styles";
import Filter from "src/components/FilterComponent/Filter";
import { useSelector, useDispatch } from "react-redux";
import { useAxios } from "../../networking/Login/LoginAPI";

export default function ClassesScreen({ navigation }) {
  const [statusOpen, setStatusOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);
  const [dateFromOpen, setDateFromOpen] = useState(false);
  const [dateToOpen, setDateToOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [classValue, setClassValue] = useState(null);
  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [ToValue, setToValue] = useState(new Date(Date.now()));
  const { userClassData } = useSelector((state) => state.OnlineClass);

  const [statusItems, setStatusItems] = useState([
    { label: "Active", value: "1" },
    { label: "Inactive", value: "2" },
  ]);
  const [classItems, setClassItems] = useState([
    { label: "Active", value: "1" },
    { label: "Inactive", value: "2" },
  ]);

  const refRBSheet = useRef();
  // Rendering flatlist Items
  const renderData = ({ item, index }) => {
    return (
      <View key={index} style={[styles.flatListDataCss]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.titleCss}>{item.title}</Text>
          <Text style={styles.dayCss}>{item.day}</Text>
        </View>
        <Text style={styles.dateTextCss}>
          Date {item.form} To {item.to}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <View style={styles.timerCss}>
            <Image
              style={{ width: 12, height: 14 }}
              source={require("src/images/access_time.png")}
            />
            <Text style={styles.timerTextCss}>{item.time} Hour</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "green",
              borderRadius: 10,
              paddingTop: 1,
              paddingBottom: 1,
              paddingLeft: 5,
              paddingRight: 5,
              marginLeft: 10,
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderRadius: 50,
                width: 8,
                height: 8,
                marginTop: 3.5,
                backgroundColor: "green",
                borderColor: "green",
              }}
            ></View>
            <Text
              style={{
                color: "green",
                fontSize: 10,
                textAlign: "right",
                borderRadius: 5,
                marginLeft: 5,
                marginTop: 1,
                fontWeight: "500",
              }}
            >
              {item.status}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        {/* Filter Header */}
        <Text style={styles.headingTextCss}>My Classes</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SearchScreen", { searchBy: "Classes" })
            }
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={require("src/images/search.png")}
            />
          </TouchableOpacity>
          {/* Filter Icon  */}
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("src/images/filter_list.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fliterBarCss}>
        <Text style={styles.totalClassCss}>
          {userClassData.length.toString()} Classes
        </Text>

        <View style={styles.newestCss}>
          <Image
            style={{ width: 15, height: 15 }}
            source={require("src/images/import_export.png")}
          />
          <Text style={styles.newestTextCss}>Newest First</Text>
        </View>
      </View>
      {/*  Flatlist */}
      <Animated.FlatList
        data={userClassData}
        keyExtractor={(item) => item.id}
        renderItem={(item, index) => renderData(item, index)}
      />
      <View
        style={{
          backgroundColor: "#2c6fcd",
          opacity: 0.1,
          textAlign: "center",
          height: 5,
        }}
      ></View>

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
