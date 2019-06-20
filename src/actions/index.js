// import axios from 'axios';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts  = () => async dispatch => {
		const response = await jsonPlaceholder.get("/posts");
		dispatch({
			type : 'FETCH_POSTS',
			payload : response.data
		});
	};
//since here there is only one line to the fetchPost action creater we return directly the function that we have.

export const fetchUser = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({
		type : 'FETCH_USER',
		payload : response.data
	});
}