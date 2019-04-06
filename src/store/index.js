import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import freeze from 'redux-freeze';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { navigation } from './navigation';
import { tracking } from './tracking';
import { user } from './user';
import { quiz } from './quiz';


const store = createStore(
    combineReducers({ navigation, tracking, user, quiz}),
    undefined,
    composeWithDevTools(
        applyMiddleware(freeze, thunk, logger)
    )
);

export default store;