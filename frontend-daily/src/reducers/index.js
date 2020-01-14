import { combineReducers } from "redux"

import auth from './authReducer'
import report from './reportReducer'
import users from "./usersReducer"

export default combineReducers ({
    auth,
    report,
    users
})