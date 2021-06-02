import {combineReducers} from 'redux';
import covidDataReducer from './covid.data.reducer';

const rootReducers = combineReducers({
    covidDataReducer: covidDataReducer,
})

export default rootReducers;