import { combineReducers } from 'redux'


import Loader from './LoaderReducers'
import Notification from './NotificationReducers'
import OnlineClass from './OnlineClassReducers'
import RequestClass from './RequestClassReducers'


export default combineReducers({
 
  Loader:Loader,
  Notification: Notification,
  OnlineClass:  OnlineClass,
  RequestClass: RequestClass,

  })
  