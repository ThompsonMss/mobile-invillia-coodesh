import { app } from '@Config/firebase'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { getAuth, signOut as signOutFirebase } from 'firebase/auth'

export async function signout(): Promise<void> {
  try {
    const auth = getAuth(app)
    await signOutFirebase(auth)
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
