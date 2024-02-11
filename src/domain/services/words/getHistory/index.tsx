import { ItemWordHistoryModel } from '@Domain/models/ItemWordHistoryModel'
import { keysStorage } from '@Shared/constants/keysStorage'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { storage } from '@Shared/helpers/storage'

export async function getHistory() {
  try {
    const keys = await storage.getAllKeys()

    const validKeysWords = keys.filter((key) => {
      if (key.includes(keysStorage.history)) {
        return true
      }

      return false
    })

    const items: ItemWordHistoryModel[] = []

    for await (const keyWord of validKeysWords) {
      const item = await storage.getItem(keyWord)

      if (item) {
        items.push(JSON.parse(item))
      }
    }

    return items
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
