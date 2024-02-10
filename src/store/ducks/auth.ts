// Action Types
const Types = {
  SAVE_USER: 'auth/SAVE_USER',
  LOGOUT: 'auth/LOGOUT'
} as const

// Tipos de Ações
type SaveUserAction = {
  type: typeof Types.SAVE_USER
  payload: {
    uid: string
  }
}

type LogoutAction = {
  type: typeof Types.LOGOUT
}

type AuthActionTypes = SaveUserAction | LogoutAction

// Estado inicial
export interface AuthState {
  uid: string | null
}

const initialState: AuthState = {
  uid: null
}

// Reducer
export default function reducer(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case Types.SAVE_USER:
      return {
        ...state,
        uid: action.payload.uid
      }
    case Types.LOGOUT:
      return {
        ...state,
        uid: null
      }
    default:
      return state
  }
}

// Action
export const AuthActions = {
  saveUser: (uid: string): SaveUserAction => ({
    type: Types.SAVE_USER,
    payload: {
      uid
    }
  }),

  logout: (): LogoutAction => ({
    type: Types.LOGOUT
  })
}
