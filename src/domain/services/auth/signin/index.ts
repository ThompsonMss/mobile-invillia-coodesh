import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export interface InterfaceRequestDoLogin {
  email: string
  password: string
}

export async function signin(
  dataRequest: InterfaceRequestDoLogin
): Promise<void> {
  try {
    const auth = getAuth()
    await signInWithEmailAndPassword(
      auth,
      dataRequest.email,
      dataRequest.password
    )
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
