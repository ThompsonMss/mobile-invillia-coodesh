import { clientApi } from '@Config/http/clientApi'
import { ItemDictionaryModel } from '@Domain/models/ItemDictionaryModel'
import { ItemDictionaryNotFoundModel } from '@Domain/models/ItemDictionaryNotFoundModel'

export async function getDetailWord(
  word: string
): Promise<ItemDictionaryModel | ItemDictionaryNotFoundModel> {
  try {
    const response = await clientApi.get({ url: word })

    if (Array.isArray(response)) {
      return response[0]
    }

    throw new Error('Word not found')
  } catch (error) {
    throw new Error('Word not found')
  }
}
