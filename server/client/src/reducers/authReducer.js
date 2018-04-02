import { FETCH_QUOTE, FETCH_AUTH_QUOTES, FETCH_DISCOURSE } from '../actions/types';

const initialState = {
	//userName: '',
	quote: {},
	loading: false,
	authQuotes: [],
	theDiscourse: '',
};

export default function(state = initialState, action) {
	switch (action.type) {
		// case LOADING_USER:
		// 	return { ...state, loading: true };
		// case FETCH_USER:
		// 	return { ...state, userName: action.payload, loading: false };
		case FETCH_QUOTE:
			return { ...state, quote: action.payload };
		case FETCH_AUTH_QUOTES:
			return { ...state, authQuotes: action.payload };
		case FETCH_DISCOURSE:
			return { ...state, theDiscourse: action.payload };
		default:
			return state;
	}
}
