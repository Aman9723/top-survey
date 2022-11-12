import {
	SIGNUP_EMAIL,
	SIGNUP_TERMS,
	SIGNUP_NEWSLETTER,
	SIGNUP_PASSWORD,
	IS_LOADING,
	IS_ERROR,
	IS_SUCCESS,
	CONFIRM_PASSWORD,
} from "./signup.types";
import axios from "axios";

const signupEmail = (email) => {
	return { type: SIGNUP_EMAIL, payload: email };
};

const signupTerms = (terms) => {
	return { type: SIGNUP_TERMS, payload: terms };
};

const signupNewsLetter = (newsletter) => {
	return { type: SIGNUP_NEWSLETTER, payload: newsletter };
};

const signupPassword = (password) => {
	return { type: SIGNUP_PASSWORD, payload: password };
};

const confirmSignupPassword = (confirmPassword) => {
	return { type: CONFIRM_PASSWORD, payload: confirmPassword };
};

const checkEmail = (email) => async (dispatch) => {
	// post request to db to check if email is present in db
	dispatch({ type: IS_LOADING });
	try {
		let res = await axios.get(
			`${process.env.REACT_APP_FETCH_URL}signup/email/${email}`
		);
		res = res.data;
		if (res === "unique") dispatch({ type: IS_SUCCESS });
		else dispatch({ type: IS_ERROR, payload: res });
	} catch (e) {
		dispatch({ type: IS_ERROR, payload: e.message });
	}
};

const createAccount = (userData) => async (dispatch) => {
	// post request to db to add user data
	dispatch({ type: IS_LOADING });
	try {
		let res = await axios.post(
			`${process.env.REACT_APP_FETCH_URL}signup/password`,
			userData
		);
		res = res.data;
		if (res === "account created") dispatch({ type: IS_SUCCESS });
		else dispatch({ type: IS_ERROR, payload: res });
	} catch (e) {
		dispatch({ type: IS_ERROR, payload: e.message });
	}
};

export {
	signupEmail,
	signupTerms,
	signupNewsLetter,
	signupPassword,
	checkEmail,
	confirmSignupPassword,
	createAccount,
};
