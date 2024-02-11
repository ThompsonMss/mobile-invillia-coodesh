import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { keysStorage } from '@Shared/constants/keysStorage'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { storage } from '@Shared/helpers/storage'

export async function saveFavorites(data: ItemWordModel): Promise<void> {
  try {
    // Verificando se já está no banco.
    const item = await storage.getItem(`${keysStorage.favorite}${data.id}`)

    if (item) {
      return
    }

    await storage.setItem(`${keysStorage.favorite}${data.id}`, JSON.stringify(data))
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
