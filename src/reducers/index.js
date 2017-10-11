import { combineReducers } from 'redux'
import bungieData from './bungiedata'
import auth from "./auth";

const reducers = combineReducers({ auth, bungieData });

export default reducers;
