import {
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	GET_USER,
	GET_USER_SUCCESS,
	GET_USER_FAIL
} from './types'

import api from './api'

export const registerUser = (username, email, password, callback) => {
	return dispatch => {
		dispatch({type: REGISTER_USER})
		
		api.post('auth/local/register', {
			email: email,
			username: user,
			password: password,
		}).then(res => {
			dispatch({type: REGISTER_USER_SUCCESS, payload: res.data})
			console.log('Register user', res.data)
			if(callback){
				callback(res)
			}
		})
		.catch(err => {
			dispatch({type: REGISTER_USER_FAIL})
			console.log("Errr Register User", err.response ? err.response : err)
			if(callback)
				callback({error: true, erro: err})
		})
	}
}

export const getUser = (params) => {
	return dispatch => {
		dispatch({type: GET_USER})

		api.getUser('users/'+params)
			.then(res => {
				console.log("Get Users SUCCESS", res)
				dispatch({type: GET_USER_SUCCESS, payload: res.data})	
			}).catch(err => {
				console.log("Get Users FAIL", err)
				dispatch({type: GET_USER_FAIL, payload: err})	
			})
	}
}