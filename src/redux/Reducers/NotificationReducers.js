import {Get_User_NotificationData} from '../Actions/NotificationAction';
const NotificationData = require('../../NotificationData.json');

const initialState = {
  userNotificationData: NotificationData,
};

function NotificationReducers(state = initialState, action) {
  switch (action.type) {
    case Get_User_NotificationData:
      return {...state, userNotificationData: action.payload};
    default:
      return state;
  }
}
export default NotificationReducers;
