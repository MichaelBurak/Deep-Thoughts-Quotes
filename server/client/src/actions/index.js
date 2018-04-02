import axios from 'axios';
// import { FETCH_USER } from './types';
import { FETCH_QUOTE } from './types';
import { FETCH_AUTH_QUOTES } from './types';
import { FETCH_DISCOURSE } from './types';

// export const fetchUser = () => async dispatch => {
// 	const res = await axios.get('/auth/current_user');
// 	dispatch({ type: FETCH_USER, payload: res.data });
// };

export const fetchQuote = currentQuote => async dispatch => {
	const res = await axios.get('/api/quotes', {
		params: currentQuote,
	});

	dispatch({ type: FETCH_QUOTE, payload: res.data[0] });
};

export const fetchAuthQuotes = au => async dispatch => {
	const res = await axios.get(`api/quotes/${au}`);
	dispatch({ type: FETCH_AUTH_QUOTES, payload: res.data });
};

export const fetchDiscourse = () => async dispatch => {
	const res = await axios.get('/api/thediscourse');
	dispatch({ type: FETCH_DISCOURSE, payload: res.data[0].text });
};

export const updateDiscourse = discourse => async dispatch => {
	const res = await axios.put('/api/thediscourse', { text: discourse });
	dispatch({ type: FETCH_DISCOURSE, payload: res.data.text });
};

export const clearDiscourse = () => async dispatch => {
	const res = await axios.put('/api/thediscourseclear');
	dispatch({ type: FETCH_DISCOURSE, payload: res.data.text });
};
