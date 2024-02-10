// reducers.ts
import { combineReducers } from 'redux'

import auth, { AuthState } from './ducks/auth'

const rootReducer = combineReducers({
  auth
})

export interface RootState {
  auth: AuthState
}

export default rootReducer
