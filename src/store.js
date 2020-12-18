import {createStore} from 'redux';
import {ReducerContact} from './component/redux/Reducers';
import {combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore( ReducerContact , composeWithDevTools());

export default store;