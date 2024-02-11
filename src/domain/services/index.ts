import { signin } from './auth/signin'
import { signout } from './auth/signout'
import { signup } from './auth/signup'
import { logged } from './auth/logged'

import { getWords } from './words/getWords'
import { deleteFavorite } from './words/deleteFavorite'
import { getFavorites } from './words/getFavorites'
import { getHistory } from './words/getHistory'
import { saveFavorites } from './words/saveFavorites'
import { saveHistory } from './words/saveHistory'
import { getDetailWord } from './words/getDetailWord'
import { getNextWord } from './words/getNextWord'

export const Services = {
  auth: { signin, signout, signup, logged },
  words: {
    getWords,
    deleteFavorite,
    getFavorites,
    getHistory,
    saveFavorites,
    saveHistory,
    getDetailWord,
    getNextWord
  }
}
