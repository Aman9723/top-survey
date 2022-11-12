import {
	ADD_SURVEY,
	DELETE_SURVEY,
	UPDATE_SURVEY,
	GET_SURVEY,
	GET_SURVEY_BY_ID,
} from "./survey.types";
import axios from "axios";

export const getSurvey = () => async (dispatch) => {
	let res = await axios.get(`${process.env.REACT_APP_FETCH_URL}survey`);
	let data = await res.data;
	dispatch({ type: GET_SURVEY, payload: data });
};

export const getSurveybyId =
	({ id }) =>
	async (dispatch) => {
		let res = await axios.get(`${process.env.REACT_APP_FETCH_URL}survey/${id}`);
		let data = await res.data;
		dispatch({ type: GET_SURVEY_BY_ID, payload: data });
	};

export const addSurvey = (payload) => async (dispatch) => {
	dispatch({ type: ADD_SURVEY });
	let res = await axios.post(`${process.env.REACT_APP_FETCH_URL}survey`, {
		...payload,
	});
	console.log(res);
	let data = res.data;
	console.log("success", data);
};
export const deleteSurvey = (payload) => async (dispatch) => {
	dispatch({ type: DELETE_SURVEY });
	return axios.delete(`${process.env.REACT_APP_FETCH_URL}survey`, payload);
};
export const updateSurvey = (payload) => async (dispatch) => {
	dispatch({ type: UPDATE_SURVEY });
};
