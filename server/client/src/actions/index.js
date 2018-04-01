import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_QUOTE } from './types';
import { FETCH_AUTH_QUOTES } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/auth/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchQuote = () => async dispatch => {
	const res = await axios.get('/api/quotes');
	dispatch({ type: FETCH_QUOTE, payload: res.data[0] });
};

export const fetchAuthQuotes = au => async dispatch => {
	const res = await axios.get(`api/quotes/${au}`);
	dispatch({ type: FETCH_AUTH_QUOTES, payload: res.data });
};
