import {
    CREATE_REPORT,
    CREATE_REPORT_SUCCESS,
    CREATE_REPORT_FAIL,
    GET_REPORT,
    GET_REPORT_SUCCESS,
    GET_REPORT_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    reports: [],
    loading: false,
    error: false,
    message: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_REPORT: 
            return {
            ...state,
            loading: true,
            error: false,
            reports: []
        }
        case CREATE_REPORT_SUCCESS: 
            return {
            ...state,
            loading: false,
            error: false,
            reports: [],
            message: null,
        }
        case CREATE_REPORT_FAIL: 
            return {
            ...state,
            loading: false,
            error: true,
            message: action.payload,
            reports: []
        }
        case GET_REPORT:
            return {
                ...state,
                loading: true,
                error: false,
                message: null
            }
        case GET_REPORT_SUCCESS:
            return {
                ...state,
                reports: action.payload,
                loading: false,
                error: false,
                message: null
            }
        case GET_REPORT_FAIL:
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