import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import moment from "moment";
import { Rating } from "react-native-ratings";
import { ClassDetailsScreenAxios } from "src/networking/ClassDetailsScreen/ClassDetailsScreenAPI";
import { ContentLoading } from "src/components/ContentLoading/ContentLoading";
import {
  dateDifferenceInDHM,
  getDateInUserTimezone,
} from "src/Utility/utlityFunction";
import I18n from "src/I18n";
export default function OnlineDetails(props) {
  const { response, loading, error, fetchData } = ClassDetailsScreenAxios();
  const userDataId = props.route.params.userDetailsData;
  const [apidata, setApiData] = useState({
    genralInformation: "",
    ClassDetails: "",
    ClassUsers: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    getDetailDataList();
  }, [loading]);

  const getDetailDataList = () => {
    setIsLoading(loading);
    fetchData(userDataId);
    setIsLoading(loading);
  };

  useEffect(() => {
    if (response) {
      getDataNumber();
      setApiData({
        genralInformation: response,
        ClassDetails: response.class_details,
        ClassUsers:response.class_user,
      });
    }
  }, [response]);
  function getDataNumber() {
    setRemainingTime(
      dateDifferenceInDHM(
        response.request_time,
        response.time_zone_value,
        response.time_zone_id
      )
    );
    setTimeout(getDetailDataList, 10000);
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ScrollView
          style={{ width: "100%", height: "100%" }}
          nestedScrollEnabled
        >
          <View style={styles.subContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerTextCss}>Subject</Text>
              <ContentLoading
                backgroundColor={"#ccc"}
                height={15}
                margin={8}
                marginTop={12}
                width={"70%"}
                borderRadius={2}
              />
            </View>
            {/* First Row */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textHeadingStyle}>Status</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <ContentLoading
                styles={styles.textStyle}
                backgroundColor={"#ccc"}
                height={15}
                marginLeft={0}
                marginTop={5}
                width={"20%"}
                borderRadius={2}
              />
            </View>
            <View style={styles.hrLineCss} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Request Type</Text>
              <ContentLoading
                styles={styles.lightText}
                backgroundColor={"#ccc"}
                height={15}
                marginTop={30}
                width={"40%"}
                borderRadius={2}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Subject</Text>
              <ContentLoading
                styles={styles.lightText}
                backgroundColor={"#ccc"}
                height={15}
                marginTop={30}
                width={"40%"}
                borderRadius={2}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>
                Scheduled Date & Time
              </Text>
              <ContentLoading
                styles={styles.lightText}
                backgroundColor={"#ccc"}
                height={18}
                marginTop={29}
                width={"40%"}
                borderRadius={2}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Duration</Text>
              <ContentLoading
                styles={styles.lightText}
                backgroundColor={"#ccc"}
                height={15}
                marginTop={30}
                width={"40%"}
                borderRadius={2}
              />
            </View>
            <View style={styles.hrLineCss} />
            <View>
              <Text style={[styles.textHeadingStyle, { textAlign: "left" }]}>
                Description
              </Text>
              <ContentLoading
                styles={styles.lightText}
                backgroundColor={"#ccc"}
                height={50}
                marginTop={5}
                width={"100%"}
                borderRadius={2}
              />
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          style={{ width: "100%", height: "100%" }}
          nestedScrollEnabled
        >
          <View style={styles.subContainer}>
            <Text style={styles.headerTextCss}>
            {I18n.t("subject",{
              Subject:apidata && apidata.genralInformation.topic_name
            })}
            </Text>
            {/* First Row */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textHeadingStyle}>Status</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text
                style={[
                  styles.textStyle,
                  { color: "#BF1A1A", backgroundColor:'yellow',fontWeight: "700" },
                ]}
              >
                {apidata && apidata.ClassUsers.status===1?"Pending":"Completed"}
              </Text>
            </View>
            <View style={styles.hrLineCss} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Request Type</Text>
              <Text style={styles.lightText}>
                {apidata && apidata.genralInformation.request_type === "2"
                  ? "Homework Help"
                  : apidata && apidata.genralInformation.request_type === "1"
                  ? "Online Tutoring"
                  : "Online Class"}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Tutor</Text>
              <Text style={styles.lightText}>
                {apidata && apidata.genralInformation.first_name + " " + apidata.genralInformation.last_name + " "+ "("+apidata.genralInformation.username+")"}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Subject</Text>
              <Text style={styles.lightText}>
                {apidata && apidata.genralInformation.subject}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>
                Scheduled Date & Time
              </Text>

              <Text style={[styles.lightText, { width: 180 }]}>
                {" "}
                {getDateInUserTimezone(
                  apidata && apidata.genralInformation.request_time,
                  apidata && apidata.genralInformation.time_zone_value,
                  "DD MMM YYYY hh:mm A",
                  apidata && apidata.genralInformation.time_zone_id
                )}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Duration</Text>
              <Text style={styles.lightText}>
                {" "}
                {apidata && apidata.genralInformation.duration} Minute(s)
              </Text>
            </View>
            <View style={styles.hrLineCss} />
            <View>
              <Text style={[styles.textHeadingStyle, { textAlign: "left" }]}>
              Description
              </Text>
              <Text style={styles.detailCss}>
                {apidata.genralInformation.description &&
                  apidata.genralInformation.description.replace(
                    /\r?\n|\r/g,
                    " "
                  )}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
