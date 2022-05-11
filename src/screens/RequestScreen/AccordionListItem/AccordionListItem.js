import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../../styles/theme';
import moment from 'moment';
const AccordionListItem = ({
  item,
  title,
  history,
  dueDate,
  children,
  navigation,
}) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 700,
        toValue: 0,
        useNativeDriver: false,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 700,
        toValue: 1,
        useNativeDriver: false,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    }
    setOpen(!open);
  };

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <View style={styles.cardCss}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsScreen',{userDetailsData:item.id})}>
            <Text style={styles.dayCss}>
              {item.request_type === 2
                ? 'Homework Help - ' + item.public_request_id
                : 'Online Tutoring - ' + item.public_request_id}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: Theme.fontSize11,
                fontWeight: '700',
                letterSpacing: 0.7,
                marginTop:5,
                ...Platform.select({
                  ios: {fontFamily: Theme.iosFontFamily},
                  android: {fontFamily: Theme.androidFontFamily},
                }),
              }}>
              Date Created : {moment(item.created_at).format('MMMM Do YYYY, h:mm A')}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: Theme.fontSize11,
                fontWeight: '700',
                marginTop:5,
                letterSpacing: 0.8,
                ...Platform.select({
                  ios: {fontFamily: Theme.iosFontFamily},
                  android: {fontFamily: Theme.androidFontFamily},
                }),
              }}>
              {history}
            </Text>
            <Text
              style={{
                fontSize: Theme.fontSize8,
                marginTop: 10,
                color: 'grey',
                fontWeight: '700',
                ...Platform.select({
                  ios: {fontFamily: Theme.iosFontFamily},
                  android: {fontFamily: Theme.androidFontFamily},
                }),
              }}>
              {dueDate}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback onPress={() => toggleListItem()}>
          <Animated.View
            style={{
              backgroundColor: '#F2F2F2',
              padding: 5,
              borderRadius: 25,
              height: 28,
              width: 28,
              alignItems: 'center',
              transform: [{rotateZ: arrowAngle}],
            }}>
            <Icon name="angle-down" size={20} color="black" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <Animated.View style={[styles.bodyBackground, {height: bodyHeight}]}>
        <View
          style={styles.bodyContainer}
          onLayout={event =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }>
          {children}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default AccordionListItem;

const styles = StyleSheet.create({
  bodyBackground: {
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    paddingLeft: 2,
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  bodyContainer: {
    padding: 2,
    paddingLeft: 2,
    position: 'absolute',
    bottom: 0,
    width:'100%',
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
  cardCss: {
    width: wp(80),
  },
  dayCss: {
    color: '#000000',
    fontSize: Theme.fontSize6,
    textAlign: 'left',
    backgroundColor: '#2c6fcd14',
    padding: 2,
    width: 160,
    borderRadius: 5,
    ...Platform.select({
      ios: {fontFamily: Theme.iosFontFamily},
      android: {fontFamily: Theme.androidFontFamily},
    }),
  },
});
