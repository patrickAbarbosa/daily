import {
    GET_REPORT,
    GET_REPORT_SUCCESS,
    GET_REPORT_FAIL,
    CREATE_REPORT,
    CREATE_REPORT_SUCCESS,
    CREATE_REPORT_FAIL
} from './types'

import api from './api'

export const getRepots = (params) => {
    return dispatch => {
        dispatch({type: GET_REPORT})

        api.get('repots'+params)
            .then(res => {
                console.log('Get Repots SUCCESS', res)
                dispatch({type:GET_REPORT_SUCCESS, payload: res.data})
            }).catch(err => {
                console.log('Get Repots FAIL', err)
                dispatch({type:GET_REPORT_FAIL, payload: err})
            })
    }
}

export const createRepot = (previus_day, today) => {
    return dispatch => {
        dispatch({type: CREATE_REPORT})

        api.post('reports', {
            previus_day: previus_day,
            today: today
        }).then(res => {
            console.log('Create Repot SUCCESS', res)
            dispatch({type:CREATE_REPORT_SUCCESS, payload: res.data})
        }).catch(err => {
            console.log('Create Repot FAIL', err)
            dispatch({type:CREATE_REPORT_FAIL, payload: err})
        })
    }
}