import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { keysStorage } from '@Shared/constants/keysStorage'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { storage } from '@Shared/helpers/storage'

export async function getFavorites(idUser: string) {
  try {
    const keys = await storage.getAllKeys()

    const validKeysWords = keys.filter((key) => {
      if (key.includes(`${keysStorage.favorite}${idUser}`)) {
        return true
      }

      return false
    })

    const items: ItemWordModel[] = []

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
