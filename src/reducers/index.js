import { combineReducers } from 'redux';
import stories from './stories';
import story from './story';

const rootReducer = combineReducers({
  stories,
  story,
});

export default rootReducer;
