import { ItemWordHistoryModel } from '@Domain/models/ItemWordHistoryModel'
import { keysStorage } from '@Shared/constants/keysStorage'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { storage } from '@Shared/helpers/storage'

export async function saveHistory(data: Omit<ItemWordHistoryModel, 'createdAt'>): Promise<boolean> {
  try {
    // Verificando se já está no banco.
    const item = await storage.getItem(`${keysStorage.history}${data.id}`)

    if (item) {
      return false
    }

    await storage.setItem(
      `${keysStorage.history}${data.id}`,
      JSON.stringify({ ...data, createdAt: new Date().toISOString() })
    )

    return true
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
