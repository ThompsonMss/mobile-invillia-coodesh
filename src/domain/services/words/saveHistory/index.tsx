import { ItemWordHistoryModel } from '@Domain/models/ItemWordHistoryModel'
import { keysStorage } from '@Shared/constants/keysStorage'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { storage } from '@Shared/helpers/storage'

export async function saveHistory(data: ItemWordHistoryModel): Promise<void> {
  try {
    // Verificando se já está no banco.
    const item = await storage.getItem(`${keysStorage.history}${data.id}`)

    if (item) {
      return
    }

    await storage.setItem(`${keysStorage.history}${data.id}`, JSON.stringify(data))
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
