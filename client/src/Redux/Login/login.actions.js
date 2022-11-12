import axios from "axios";
import {
	LOGIN_EMAIL,
	LOGIN_PASSWORD,
	LOGIN_REQUEST,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOG_OUT,
} from "./login.types";

const loginEmail = (email) => {
	return { type: LOGIN_EMAIL, payload: email };
};

const loginPassword = (password) => {
	return { type: LOGIN_PASSWORD, payload: password };
};

const login = (cred) => async (dispatch) => {
	dispatch({ type: LOGIN_REQUEST });
	try {
		let res = await axios.post(`${process.env.REACT_APP_FETCH_URL}login`, cred);
		res = res.data;
		if (typeof res === "object")
			dispatch({ type: LOGIN_SUCCESS, payload: res.token });
		else dispatch({ type: LOGIN_ERROR, payload: res });
	} catch (e) {
		dispatch({ type: LOGIN_ERROR, payload: e.message });
	}
};

const logout = () => {
	return { type: LOG_OUT };
};

export { loginEmail, loginPassword, login, logout };
