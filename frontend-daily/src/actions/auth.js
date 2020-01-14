import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types'

import api from './api'

export const login = (user, password, callback) => {
    return dispath => {
        dispath({type: LOGIN})

        api.post('auth/local', {
            identifier: user,
            password: password,
        }).then(res => {
            dispath({type: LOGIN_SUCCESS, payload: res.data})
            console.log('Login success', res)
            if(callback)
                callback(res)
        }).catch(err => {
            dispath({type: LOGIN_FAIL, payload: err})
            console.log("Login Fail", err)
            if(callback)
                callback({error: true, err: err})
        })
    }
}