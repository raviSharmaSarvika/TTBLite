import {
   
  Get_Request_ListData,

  } from '../Actions/NotificationAction';
const userRequestData = require('../../RowDataRequest.json');

const initialState = {
  userRequestData: userRequestData,
  };



  function RequestClassReducers(state = initialState, action) {
    switch (action.type) {
      case Get_Request_ListData:
        return {...state, userRequestData: action.payload};
      default:
        return state;
    }
  }
  export default RequestClassReducers;
  