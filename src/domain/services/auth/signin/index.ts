import { app } from '@Config/firebase'
import { UserModel } from '@Domain/models/UserModel'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export interface InterfaceRequestSignin {
  email: string
  password: string
}

export async function signin(dataRequest: InterfaceRequestSignin): Promise<UserModel> {
  try {
    const auth = getAuth(app)
    return await signInWithEmailAndPassword(auth, dataRequest.email, dataRequest.password)
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
