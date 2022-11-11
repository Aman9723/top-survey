import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import signupReducer from './Signup/signup.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    signup: signupReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
