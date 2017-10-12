import { combineReducers } from 'redux'
import bungieData from './bungiedata'
import auth from "./auth";
import userData from './user';

const reducers = combineReducers({ auth, bungieData, userData });

export default reducers;
