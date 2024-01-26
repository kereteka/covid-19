import { combineReducers } from 'redux';
import countryDetailsReducer from './countryDetailsReducer';

const rootReducer = combineReducers({
  countryDetails: countryDetailsReducer,
});

export default rootReducer;
