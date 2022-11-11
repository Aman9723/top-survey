import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import signupReducer from './Signup/signup.reducer';
import thunk from 'redux-thunk';
import loginReducer from './Login/login.reducer';

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
