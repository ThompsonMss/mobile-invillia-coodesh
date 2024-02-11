import { keysStorage } from '@Shared/constants/keysStorage'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { storage } from '@Shared/helpers/storage'

export async function deleteFavorite(id: string): Promise<void> {
  try {
    // Verificando se já está no banco.
    const item = await storage.getItem(`${keysStorage.favorite}${id}`)

    if (item) {
      await storage.removeItem(`${keysStorage.favorite}${id}`)
    }
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
