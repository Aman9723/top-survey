import {
    FORGOT_EMAIL,
    FORGOT_PASSWORD,
    FORGOT_REQUEST,
    FORGOT_ERROR,
    FORGOT_SUCCESS,
    FORGOT_NOT_SUCCESS,
} from './forgot.type';

const initState = {
    email: '',
    isEmailValid: false,
    newPassword: '',
    isPasswordValid: false,
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
};

const forgotReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FORGOT_EMAIL: {
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
        case FORGOT_PASSWORD: {
            return {
                ...state,
                newPassword: payload,
                isPasswordValid: payload.length >= 8,
            };
        }
        case FORGOT_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
            };
        }
        case FORGOT_ERROR: {
            return {
                ...state,
                error: true,
                loading: false,
                errorMessage: payload,
            };
        }
        case FORGOT_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
            };
        }
        case FORGOT_NOT_SUCCESS: {
            return {
                ...state,
                success: false,
            };
        }
        default:
            return state;
    }
};

export default forgotReducer;
