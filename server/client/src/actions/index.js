import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_QUOTE } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/auth/current_user');
	console.log('the user is' + res.data);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchQuote = () => async dispatch => {
	const res = await axios.get('/api/quotes');
	console.log('the quote is' + res.data[0]);

	dispatch({ type: FETCH_QUOTE, payload: res.data[0] });
};
