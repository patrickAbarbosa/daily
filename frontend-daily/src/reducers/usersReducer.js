import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: false,
    message: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_USER: 
            return {
            ...state,
            loading: true,
            error: false,
            users: []
        }
        case REGISTER_USER_SUCCESS: 
            return {
            ...state,
            loading: false,
            error: false,
            users: [],
            message: null,
        }
        case REGISTER_USER_FAIL: 
            return {
            ...state,
            loading: false,
            error: true,
            message: action.payload,
            users: []
        }
        case GET_USER:
            return {
                ...state,
                loading: true,
                error: false,
                message: null
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: false,
                message: null
            }
        case GET_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        default:
            return state
    }
}