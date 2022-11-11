import {
    SIGNUP_EMAIL,
    SIGNUP_TERMS,
    SIGNUP_NEWSLETTER,
    SIGNUP_PASSWORD,
    CONFIRM_PASSWORD,
    IS_ERROR,
    IS_LOADING,
    IS_SUCCESS,
    IS_NOT_SUCCESS,
} from './signup.types';

let initState = {
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
    newsLetter: false,
    isEmailValid: false,
    isPasswordValid: false,
    isLoading: false,
    isError: false,
    errorMessage: '',
    isSuccess: false,
};

const signupReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SIGNUP_EMAIL: {
            return {
                ...state,
                email: payload,
                isEmailValid: !!String(payload)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ),
            };
        }
        case SIGNUP_TERMS: {
            return {
                ...state,
                terms: payload,
            };
        }
        case SIGNUP_NEWSLETTER: {
            return {
                ...state,
                newsLetter: payload,
            };
        }
        case SIGNUP_PASSWORD: {
            return {
                ...state,
                password: payload,
                isPasswordValid: payload.length >= 8,
            };
        }
        case CONFIRM_PASSWORD: {
            return {
                ...state,
                confirmPassword: payload,
            };
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        }
        case IS_ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
                errorMessage: payload,
            };
        }
        case IS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
            };
        }
        case IS_NOT_SUCCESS: {
            return {
                ...state,
                isSuccess: false,
            };
        }
        default:
            return state;
    }
};

export default signupReducer;
