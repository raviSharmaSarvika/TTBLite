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
import { HomeDetailsScreenAxios } from "src/networking/HomeDetailsScreen/HomeDetailsScreenAPI";
import { ContentLoading } from "src/components/ContentLoading/ContentLoading";
import { TIMELINEEVENTS } from "src/Utility/constants";
import get from 'lodash/get'
import REQ_CREATED from "src/images/request-history-icons/req_created.svg";
import REQ_ASSIGNED from "src/images/request-history-icons/req_assigned.svg";
import REQ_SELFASSIGNED from "src/images/request-history-icons/req_selfassigned.svg";
import REQ_RELEASED from "src/images/request-history-icons/req_released.svg";
import QUOTE_RECEIVED from "src/images/request-history-icons/quote_received.svg";
import REQ_ACCEPTED from "src/images/request-history-icons/req_accepted.svg";
import SEEK_NEWTUTOR from "src/images/request-history-icons/seek_newtutor.svg";
import RESCHEDULE_REQUEST from "src/images/request-history-icons/reschedule_request.svg";
import RESCHEDULE_ACCEPTED from "src/images/request-history-icons/reschedule_accepted.svg";
import RESCHEDULE_REJECTED from "src/images/request-history-icons/reschedule_rejected.svg";
import REQ_CANCELED from "src/images/request-history-icons/req_cancelled.svg";
import PAYMENT_CONFIRMED from "src/images/request-history-icons/payment_completed.svg";
// PAYMENT_LINK_EXPIRED from "src/images/request-history-icons/req_created.svg ";
import ASSIGNMENT_SUBMITTED from "src/images/request-history-icons/assignment-submit.svg";
import SESSION_COMPLETED from "src/images/request-history-icons/session_completed.svg";
import FEEDBACK_PROVIDED from "src/images/request-history-icons/feedback_provided.svg";
import CONFLICTS_CREATED from "src/images/request-history-icons/req_archived.svg";
import CONFLICTS_RESOLVED from "src/images/request-history-icons/conflisct-resolved.svg";
import PARTIAL_REFUND from "src/images/request-history-icons/partial_refund.svg";
import FULL_REFUND from "src/images/request-history-icons/full_refund.svg";
import REQ_DELETED from "src/images/request-history-icons/req_deleted.svg";
import {
  dateDifferenceInDHM,
  getDateInUserTimezone,
} from "src/Utility/utlityFunction";
import I18n from "src/I18n";
export default function DetailsScreen(props) {
  const { response, loading, error, fetchData } = HomeDetailsScreenAxios();
  const userDataId = props.route.params.userDetailsData;
  const [apidata, setApiData] = useState({
    genralInformation: "",
    studentInformation: "",
    tutorInformation: "",
    timeLineInfromtion: [],
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    getDetailDataList();
  }, [loading]);

  const getDetailDataList = () => {
    console.log(userDataId)
    setIsLoading(loading);
    fetchData(userDataId);
    setIsLoading(loading);
  };

  useEffect(() => {
    if (response) {
      getDataNumber();
      setApiData({
        genralInformation: response,
        studentInformation: response.student_detail,
        tutorInformation:response.tutor_detail,
        timeLineInfromtion: response.request_timeline,
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
  const getTimeline = function (item) {
    switch (item.action) {
      case TIMELINEEVENTS.REQ_CREATED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <REQ_CREATED />
                </View>
                <Text style={styles.timeLineCss}>
                 {I18n.t("REQ_CREATED",{
                   REQ_CREATED:getDateInUserTimezone(
                    item.created_at,
                    apidata && apidata.genralInformation.time_zone_value,
                    "DD MMM YYYY hh:mm A",
                    apidata && apidata.genralInformation.time_zone_id
                  )
                 })} 
                 </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.REQ_ASSIGNED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <REQ_ASSIGNED />
                </View>
                <Text style={[styles.timeLineCss,{ marginLeft: 10, paddingRight:20}]}> 
               {apidata.tutorInformation.username} by {apidata.studentInformation.username} 
               {"\n"}
               {I18n.t("REQ_ASSIGNED",{
                   REQ_ASSIGNED:getDateInUserTimezone(
                    item.created_at,
                    apidata && apidata.genralInformation.time_zone_value,
                    "DD MMM YYYY hh:mm A",
                    apidata && apidata.genralInformation.time_zone_id
                  )
                 })} 
               </Text>
              </View>

              <View style={{ flexDirection: "row",marginTop:-6 }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.REQ_SELFASSIGNED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <REQ_SELFASSIGNED />
                </View>
                <Text style={styles.timeLineCss}>
                {apidata.studentInformation.username}  self-assigned request on  
                {getDateInUserTimezone(
                  item.created_at,
                  apidata && apidata.genralInformation.time_zone_value,
                  "DD MMM YYYY hh:mm A",
                  apidata && apidata.genralInformation.time_zone_id
                )}
                 </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}>Details</Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.REQ_RELEASED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <REQ_RELEASED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.QUOTE_RECEIVED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <QUOTE_RECEIVED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.REQ_ACCEPTED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <REQ_ACCEPTED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.SEEK_NEWTUTOR:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <SEEK_NEWTUTOR />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.RESCHEDULE_REQUEST:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <RESCHEDULE_REQUEST />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.RESCHEDULE_ACCEPTED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <RESCHEDULE_ACCEPTED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.RESCHEDULE_REJECTED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <RESCHEDULE_REJECTED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.REQ_CANCELED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <REQ_CANCELED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.PAYMENT_CONFIRMED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <PAYMENT_CONFIRMED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <View style={{flexDirection:'column'}}>
                <Text style={{ marginLeft: 30 }}></Text>
                </View>
               
              </View>
            </View>
          </ScrollView>
        );
      case TIMELINEEVENTS.PAYMENT_LINK_EXPIRED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <PAYMENT_CONFIRMED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
        case TIMELINEEVENTS.ASSIGNMENT_SUBMITTED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <ASSIGNMENT_SUBMITTED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
        case TIMELINEEVENTS.SESSION_COMPLETED:
        return (
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.svgImageCss}>
                  <SESSION_COMPLETED />
                </View>
                <Text style={styles.timeLineCss}>Time</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticleLine} />
                <Text style={{ marginLeft: 30 }}></Text>
              </View>
            </View>
          </ScrollView>
        );
        case TIMELINEEVENTS.FEEDBACK_PROVIDED:
          return (
            <ScrollView>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.svgImageCss}>
                    <FEEDBACK_PROVIDED />
                  </View>
                  <Text style={styles.timeLineCss}>Time</Text>
                </View>
  
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.verticleLine} />
                  <Text style={{ marginLeft: 30 }}></Text>
                </View>
              </View>
            </ScrollView>
          );
          case TIMELINEEVENTS.REQ_DELETED:
          return (
            <ScrollView>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.svgImageCss}>
                    <REQ_DELETED />
                  </View>
                  <Text style={styles.timeLineCss}>Time</Text>
                </View>
  
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.verticleLine} />
                  <Text style={{ marginLeft: 30 }}></Text>
                </View>
              </View>
            </ScrollView>
          );
          case TIMELINEEVENTS.CONFLICTS_CREATED:
            return (
              <ScrollView>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.svgImageCss}>
                      <CONFLICTS_CREATED />
                    </View>
                    <Text style={styles.timeLineCss}>Time</Text>
                  </View>
    
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.verticleLine} />
                    <Text style={{ marginLeft: 30 }}></Text>
                  </View>
                </View>
              </ScrollView>
            );
            case TIMELINEEVENTS.CONFLICTS_RESOLVED:
              return (
                <ScrollView>
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.svgImageCss}>
                        <CONFLICTS_RESOLVED />
                      </View>
                      <Text style={styles.timeLineCss}>Time</Text>
                    </View>
      
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.verticleLine} />
                      <Text style={{ marginLeft: 30 }}></Text>
                    </View>
                  </View>
                </ScrollView>
              );
              case TIMELINEEVENTS.PARTIAL_REFUND:
                return (
                  <ScrollView>
                    <View style={{ flexDirection: "column" }}>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.svgImageCss}>
                          <PARTIAL_REFUND />
                        </View>
                        <Text style={styles.timeLineCss}>Time</Text>
                      </View>
        
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.verticleLine} />
                        <Text style={{ marginLeft: 30 }}></Text>
                      </View>
                    </View>
                  </ScrollView>
                );
                case TIMELINEEVENTS.FULL_REFUND:
                  return (
                    <ScrollView>
                      <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                          <View style={styles.svgImageCss}>
                            <FULL_REFUND />
                          </View>
                          <Text style={styles.timeLineCss}>Time</Text>
                        </View>
          
                        <View style={{ flexDirection: "row" }}>
                          <View style={styles.verticleLine} />
                          <Text style={{ marginLeft: 30 }}></Text>
                        </View>
                      </View>
                    </ScrollView>
                  );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ScrollView
          style={{ width: "100%", height: "100%" }}
          nestedScrollEnabled
        >
          <View style={styles.subContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerTextCss}>Request ID :</Text>
              <ContentLoading
                backgroundColor={"#ccc"}
                height={15}
                margin={8}
                marginTop={13}
                width={"70%"}
                borderRadius={2}
              />
            </View>
            {/* First Row */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Time Remaining</Text>
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
                backgroundColor={"#ccc"}
                height={15}
                margin={0}
                marginTop={13}
                width={"55%"}
                borderRadius={2}
              />

              <ContentLoading
                styles={styles.textStyle}
                backgroundColor={"#ccc"}
                height={15}
                marginLeft={5}
                marginTop={13}
                width={"20%"}
                borderRadius={2}
              />
            </View>
            <View style={styles.hrLineCss} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Request Type</Text>
              {/* <Text style={styles.lightText}>
                {request_type === "2"
                  ? "Homework Help"
                  : request_type === "1"
                  ? "Online Tutoring"
                  : "Online Class"}
              </Text> */}
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
              <Text style={[styles.textHeadingStyle]}>Student Type</Text>
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
                height={40}
                marginTop={30}
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
                Request Details
              </Text>
              <ContentLoading
                styles={styles.lightText}
                backgroundColor={"#ccc"}
                height={50}
                marginTop={5}
                width={"100%"}
                borderRadius={2}
              />
              <Text
                style={[
                  styles.textHeadingStyle,
                  { textAlign: "left", marginTop: 12 },
                ]}
              >
                Request file attached by you
              </Text>
              <ContentLoading
                styles={styles.lightText}
                backgroundColor={"#ccc"}
                height={20}
                marginTop={5}
                width={"100%"}
                borderRadius={2}
              />
            </View>
            <View style={styles.hrLineCss} />
            <ScrollView style={{ height: "100%" }}>
              <Text style={[styles.textHeadingStyle, { textAlign: "left" }]}>
                Timeline
              </Text>
              <ContentLoading
                styles={styles.lightText}
                backgroundColor={"#ccc"}
                height={100}
                marginTop={5}
                width={"70%"}
                borderRadius={2}
              />
            </ScrollView>
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          style={{ width: "100%", height: "100%" }}
          nestedScrollEnabled
        >
          <View style={styles.subContainer}>
            <Text style={styles.headerTextCss}>
              Request ID :{" "}
              {apidata && apidata.genralInformation.public_request_id}
            </Text>
            {/* First Row */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Time Remaining</Text>
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
                  { color: "#0C7C32", fontWeight: "700" },
                ]}
              >
                {/* 0 Days 0 Hours 0 Minutes{' '} */}
                {remainingTime && remainingTime}
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  { color: "#BF1A1A", fontWeight: "700" },
                ]}
              >
                {apidata && apidata.genralInformation.sub_status}
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
              <Text style={[styles.textHeadingStyle]}>Student Type</Text>
              <Text style={styles.lightText}>
                {apidata && apidata.studentInformation.school_standard}
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
                {"\n"}
                {apidata && apidata.genralInformation.time_zone_name}
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
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textHeadingStyle]}>Payment Status</Text>
              <Text style={styles.lightText}>
                {" "}
                {apidata && apidata.genralInformation.payment_status}
              </Text>
            </View>
            <View style={styles.hrLineCss} />
            <View>
              <Text style={[styles.textHeadingStyle, { textAlign: "left" }]}>
                Request Details
              </Text>
              <Text style={styles.detailCss}>
                {apidata.genralInformation.description &&
                  apidata.genralInformation.description.replace(
                    /\r?\n|\r/g,
                    " "
                  )}
              </Text>
              <Text
                style={[
                  styles.textHeadingStyle,
                  { textAlign: "left", marginTop: 12 },
                ]}
              >
                Request file attached by you
              </Text>
              <Image
                style={styles.pdfCss}
                source={require("src/images/HomeScreen/pdfDownload.png")}
              />
            </View>
            <View style={styles.hrLineCss} />
            <ScrollView style={{ height: "100%" }}>
              <Text style={[styles.textHeadingStyle, { textAlign: "left" }]}>
                Timeline
              </Text>
              <View style={{marginTop:10}}>
                {apidata &&
                  apidata.timeLineInfromtion.map((item) => getTimeline(item))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
