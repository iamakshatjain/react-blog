// import axios from 'axios';
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
	await dispatch(fetchPosts());//we would wait for posts data
	// console.log(getState().posts);
	const userIds = _.uniq(_.map(getState().posts,'userId'));
	userIds.forEach(id => dispatch(fetchUser(id)));//we won't wait for the user data
}


export const fetchPosts  = () => async dispatch => {
		const response = await jsonPlaceholder.get("/posts");
		dispatch({
			type : 'FETCH_POSTS',
			payload : response.data
		});
	};
//since here there is only one line to the fetchPost action creater we return directly the function that we have.

export const fetchUser = (id) => dispatch => _fetchUser(id,dispatch);//the fetch user function returns a function that is called with dispatch

const _fetchUser = _.memoize( async (id,dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({
		type : 'FETCH_USER',
		payload : response.data
	});
});
