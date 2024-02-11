import { signin } from './auth/signin'
import { signout } from './auth/signout'
import { signup } from './auth/signup'
import { logged } from './auth/logged'

import { getWords } from './words/getWords'

export const Services = {
  auth: { signin, signout, signup, logged },
  words: { getWords }
}
