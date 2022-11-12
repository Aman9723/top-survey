import {
	ADD_SURVEY,
	DELETE_SURVEY,
	UPDATE_SURVEY,
	GET_SURVEY,
	GET_SURVEY_BY_ID,
} from "./survey.types";

const initState = {
	survey: [],
};

export const surveyReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case ADD_SURVEY: {
			return { ...state, survey: [...state.survey, payload] };
		}
		case DELETE_SURVEY: {
			let id = payload.id;
			const filterSurvey = state.survey.filter((ele) => ele.id !== id);
			return { ...state, survey: filterSurvey };
		}
		case UPDATE_SURVEY: {
			const id = payload.id;
			const updatedSurvey = state.survey.map((ele) => {
				if (ele.id === id) {
					return payload;
				}
				return ele;
			});
			return { ...state, survey: updatedSurvey };
		}
		case GET_SURVEY: {
			return { ...state, survey: payload };
		}
		case GET_SURVEY_BY_ID: {
			return { ...state, survey: payload };
		}
		default: {
			return state;
		}
	}
};
