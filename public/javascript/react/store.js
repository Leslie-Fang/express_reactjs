/**
 * Created by leslie on 2017/7/19.
 */
import {createStore, applyMiddleware} from 'redux';
import allReducers from '../babel/reducer/index.js';

export const store = createStore(allReducers,/* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());