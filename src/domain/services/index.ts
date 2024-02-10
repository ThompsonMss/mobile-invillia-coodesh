import { signin } from './auth/signin'
import { signout } from './auth/signout'
import { signup } from './auth/signup'
import { logged } from './auth/logged'

export const Services = {
  auth: { signin, signout, signup, logged }
}
