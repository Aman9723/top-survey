import {
	LOGIN_EMAIL,
	LOGIN_PASSWORD,
	LOGIN_REQUEST,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOG_OUT,
} from "./login.types";

let token = localStorage.getItem("token");

let initState = {
	email: "",
	password: "",
	loading: false,
	error: false,
	isEmailValid: false,
	token: token,
	errorMessage: "",
};

const loginReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOGIN_EMAIL: {
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
		case LOGIN_PASSWORD: {
			return {
				...state,
				password: payload,
			};
		}
		case LOGIN_REQUEST: {
			return {
				...state,
				loading: true,
				error: false,
			};
		}
		case LOGIN_ERROR: {
			return {
				...state,
				error: true,
				loading: false,
				errorMessage: payload,
			};
		}
		case LOGIN_SUCCESS: {
			localStorage.setItem("token", payload);
			console.log("qwr", token);
			return {
				...state,
				loading: false,
				error: false,
				token: payload,
			};
		}
		case LOG_OUT: {
			localStorage.removeItem("token");
			return {
				...state,
				token: "",
			};
		}
		default:
			return state;
	}
};

export default loginReducer;
