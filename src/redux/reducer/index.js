import { combineReducers } from 'redux'

import user from './userReducer'
import charts from './charts'

export default combineReducers({ user, charts })
