import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import uriReducer from './uriReducer';

const rootReducer = combineReducers({
  boardReducer,uriReducer
});

export default rootReducer;