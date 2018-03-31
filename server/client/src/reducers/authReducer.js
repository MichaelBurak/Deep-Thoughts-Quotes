import { FETCH_USER, FETCH_QUOTE, LOADING_USER } from '../actions/types';

const initialState = {
	userName: {},
	quote: {},
	loading: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING_USER:
			return {
				...state,
				loading: true,
			};
		case FETCH_USER:
			return {
				...state,
				userName: action.payload,
				loading: false,
			};
		case FETCH_QUOTE:
			return {
				...state,
				quote: action.payload,
			};
		default:
			return state;
	}
}
