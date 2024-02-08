import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export interface InterfaceRequestDoLogin {
  email: string
  password: string
}

export async function signup(
  dataRequest: InterfaceRequestDoLogin
): Promise<void> {
  try {
    const auth = getAuth()
    await createUserWithEmailAndPassword(
      auth,
      dataRequest.email,
      dataRequest.password
    )
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
