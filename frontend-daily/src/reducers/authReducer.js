import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    email: '',
    thumbnail: '',
    loading: '',
    error: '',
    message: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN: 
            return {
            ...state,
            loading: true,
            error: false,
        }
        case LOGIN_SUCCESS: 
            return {
            ...state,
            loading: false,
            error: false,
            message: null,
        }
        case LOGIN_FAIL: 
            return {
            ...state,
            loading: false,
            error: true,
            message: action.payload,
        }
        default:
            return state
    }
}