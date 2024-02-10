import { app } from '@Config/firebase'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { getAuth } from 'firebase/auth'

export async function logged(): Promise<boolean> {
  try {
    const auth = getAuth(app)

    if (auth.currentUser) {
      return true
    } else {
      return false
    }
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
