import {LOADER} from '../types';

const initialState = {
  isLoading: false,
};
function LoaderReducers(state = false, action) {
  switch (action.type) {
    case LOADER:
      return  action.payload;
    default:
      return state;
  }
}
export default LoaderReducers;