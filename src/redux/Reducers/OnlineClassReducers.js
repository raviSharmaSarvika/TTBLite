import Get_Online_ClassData from '../Actions/OnlineClassAction';
const ClassData = require('../../RowDataClasses.json');

const initialState = {
    userClassData: ClassData,
  };



  function OnlineClassReducers(state = initialState, action) {
    switch (action.type) {
      case Get_Online_ClassData:
        return {...state, userClassData: action.payload};
      default:
        return state;
    }
  }
  export default OnlineClassReducers;
  