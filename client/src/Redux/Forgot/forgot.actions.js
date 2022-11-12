import {
    FORGOT_EMAIL,
    FORGOT_PASSWORD,
    FORGOT_CODE,
    FORGOT_REQUEST,
    FORGOT_ERROR,
    FORGOT_SUCCESS,
} from './forgot.type';

import axios from 'axios';

const forgotEmail = (email) => {
    return { type: FORGOT_EMAIL, payload: email };
};

const forgotPassword = (password) => {
    return { type: FORGOT_PASSWORD, payload: password };
};

const forgotCode = (code) => {
    return { type: FORGOT_CODE, payload: code };
};

const sendOtp = (email) => async (dispatch) => {
    dispatch({ type: FORGOT_REQUEST });
    try {
        let res = await axios.post('http://localhost:8080/forgot/setOtp', {
            email,
        });
        res = res.data;
        if (res === 'Enter code') dispatch({ type: FORGOT_SUCCESS });
        else dispatch({ type: FORGOT_ERROR, payload: res });
    } catch (e) {
        dispatch({ type: FORGOT_ERROR, payload: e.message });
    }
};

const changePassword = (data) => async (dispatch) => {
    dispatch({ type: FORGOT_REQUEST });
    try {
        let res = await axios.patch(
            'http://localhost:8080/forgot/changePassword',
            data
        );
        res = res.data;
        if (res === 'password changed') dispatch({ type: FORGOT_SUCCESS });
        else dispatch({ type: FORGOT_ERROR, payload: res });
    } catch (e) {
        dispatch({ type: FORGOT_ERROR, payload: e.message });
    }
};

export { forgotEmail, forgotPassword, forgotCode, sendOtp, changePassword };
