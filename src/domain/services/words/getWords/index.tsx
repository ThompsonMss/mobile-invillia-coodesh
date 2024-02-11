import { app } from '@Config/firebase'
import { ItemWordModel } from '@Domain/models/ItemWordModel'

import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { shuffleArray } from '@Shared/helpers/shuffleArray'
import { getDatabase, ref, query, orderByKey, limitToFirst, startAt, get } from 'firebase/database'

export async function getWords({
  lastKey
}: {
  lastKey: string | null
}): Promise<{ data: ItemWordModel[]; lastKey: string | null }> {
  try {
    const database = getDatabase(app)
    const databaseRef = ref(database)

    const limit = 80

    let q = query(databaseRef, orderByKey(), limitToFirst(limit))
    if (lastKey) {
      q = query(q, startAt(lastKey))
    }

    const snapshot = await get(q)
    const data = snapshot.val()

    // Atualiza a chave do último item
    const keys = Object.keys(data)
    if (keys.length > 0) {
      const lastKeyAux = keys[keys.length - 1]
      lastKey = lastKeyAux
    }

    const response: ItemWordModel[] = shuffleArray(Object.keys(data)).map((word) => {
      return {
        id: word,
        word: word
      }
    })

    return {
      lastKey: lastKey,
      data: response
    }
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
