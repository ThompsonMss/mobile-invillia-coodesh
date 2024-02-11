import { clientApi } from '@Config/http/clientApi'
import { ItemDictionaryModel } from '@Domain/models/ItemDictionaryModel'
import { ItemDictionaryNotFoundModel } from '@Domain/models/ItemDictionaryNotFoundModel'
import { keysStorage } from '@Shared/constants/keysStorage'
import { storage } from '@Shared/helpers/storage'

export async function getDetailWord(
  word: string
): Promise<ItemDictionaryModel | ItemDictionaryNotFoundModel> {
  try {
    const responseCache = await storage.getItem(`${keysStorage.cacheAPI}${word}`)

    if (responseCache) {
      return JSON.parse(responseCache)
    }

    const response = await clientApi.get({ url: word })

    if (Array.isArray(response)) {
      await storage.setItem(`${keysStorage.cacheAPI}${word}`, JSON.stringify(response[0]))
      return response[0]
    }

    throw new Error('Word not found')
  } catch (error) {
    throw new Error('Word not found')
  }
}
