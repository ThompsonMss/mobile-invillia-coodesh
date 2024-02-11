// reducers.ts
import { combineReducers } from 'redux'

import auth, { AuthState } from './ducks/auth'
import words, { WordsState } from './ducks/words'

const rootReducer = combineReducers({
  auth,
  words
})

export interface RootState {
  auth: AuthState
  words: WordsState
}

export default rootReducer
