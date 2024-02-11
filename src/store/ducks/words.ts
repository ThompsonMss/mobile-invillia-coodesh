import { ItemWordModel } from '@Domain/models/ItemWordModel'

// Action Types
const Types = {
  SET_HISTORY: 'words/SET_HISTORY',
  UPDATE_HISTORY: 'words/UPDATE_HISTORY',
  SET_FAVORITES: 'words/SET_FAVORITES',
  UPDATE_FAVORITES: 'words/UPDATE_FAVORITES',
  UPDATE_LOAD: 'words/UPDATE_LOAD'
} as const

export interface InterfacePayloadHistoryAndFavorites {
  id: string
  word: string
  createdAt: string
}

// Tipos de Ações
type UpdateHistoryAction = {
  type: typeof Types.UPDATE_HISTORY
  payload: InterfacePayloadHistoryAndFavorites
}

type SetHistoryAction = {
  type: typeof Types.SET_HISTORY
  payload: InterfacePayloadHistoryAndFavorites[]
}

type UpdateFavoritesAction = {
  type: typeof Types.UPDATE_FAVORITES
  payload: Omit<InterfacePayloadHistoryAndFavorites, 'createdAt'>
}

type SetFavoritesAction = {
  type: typeof Types.SET_FAVORITES
  payload: Omit<InterfacePayloadHistoryAndFavorites, 'createdAt'>[]
}

type UpdateLoadAction = {
  type: typeof Types.UPDATE_LOAD
  payload: {
    load: boolean
  }
}

type AuthActionTypes =
  | UpdateHistoryAction
  | UpdateFavoritesAction
  | UpdateLoadAction
  | SetHistoryAction
  | SetFavoritesAction

// Estado inicial
export interface WordsState {
  load: boolean
  dataHistory: ItemWordModel[]
  dataFavorites: ItemWordModel[]
}

const initialState: WordsState = {
  load: false,
  dataFavorites: [],
  dataHistory: []
}

// Reducer
export default function reducer(state = initialState, action: AuthActionTypes): WordsState {
  switch (action.type) {
    case Types.SET_FAVORITES:
      return {
        ...state,
        dataFavorites: action.payload
      }
    case Types.SET_HISTORY:
      return {
        ...state,
        dataHistory: action.payload
      }
    case Types.UPDATE_FAVORITES:
      return {
        ...state,
        dataFavorites: [
          ...state.dataFavorites,
          { id: action.payload.id, word: action.payload.word }
        ]
      }
    case Types.UPDATE_HISTORY:
      return {
        ...state,
        dataHistory: [...state.dataHistory, { id: action.payload.id, word: action.payload.word }]
      }
    case Types.UPDATE_LOAD:
      return {
        ...state,
        load: action.payload.load
      }
    default:
      return state
  }
}

// Action
export const WordsActions = {
  setHistory: (data: InterfacePayloadHistoryAndFavorites[]): SetHistoryAction => ({
    type: Types.SET_HISTORY,
    payload: data
  }),
  updateHistory: (data: InterfacePayloadHistoryAndFavorites): UpdateHistoryAction => ({
    type: Types.UPDATE_HISTORY,
    payload: data
  }),
  setFavorites: (
    data: Omit<InterfacePayloadHistoryAndFavorites, 'createdAt'>[]
  ): SetFavoritesAction => ({
    type: Types.SET_FAVORITES,
    payload: data
  }),
  updateFavorites: (
    data: Omit<InterfacePayloadHistoryAndFavorites, 'createdAt'>
  ): UpdateFavoritesAction => ({
    type: Types.UPDATE_FAVORITES,
    payload: data
  }),
  updateLoad: (load: boolean): UpdateLoadAction => ({
    type: Types.UPDATE_LOAD,
    payload: {
      load: load
    }
  })
}
