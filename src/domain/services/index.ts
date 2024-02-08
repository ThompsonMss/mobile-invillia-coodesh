import { signin } from './auth/signin'
import { signout } from './auth/signout'
import { signup } from './auth/signup'

export const Services = {
  auth: { signin, signout, signup }
}
