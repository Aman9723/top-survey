<<<<<<< HEAD
// import { legacy_createStore } from 'redux';

// const store = legacy_createStore();
=======

import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import signupReducer from './Signup/signup.reducer';
import thunk from 'redux-thunk';
import loginReducer from './Login/login.reducer';
import { surveyReducer } from "./Survey/survey.reducer";

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    survey: surveyReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> 1607eb8460db0dc14ce9390839a5ceee80d408eb

// export default store;
