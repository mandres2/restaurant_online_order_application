import announcementReducer from './announcementReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // The announcement property will update from the announcementReducer inside the State Object
  announcement: announcementReducer
});

export default rootReducer;
