import { app } from '@Config/firebase'
import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { getErrorMessageHelper } from '@Shared/helpers/getErrorMessageHelper'
import { getDatabase, ref, query, orderByKey, limitToFirst, get, startAt } from 'firebase/database'

export async function getNextWord({
  word
}: {
  word: string
}): Promise<{ data: ItemWordModel | null }> {
  try {
    const database = getDatabase(app)
    const databaseRef = ref(database)

    const q = query(databaseRef, orderByKey(), startAt(word), limitToFirst(2))

    const snapshot = await get(q)
    const data = snapshot.val()

    if (!data) {
      return {
        data: null
      }
    }

    const keys = Object.keys(data)

    if (keys.length > 1) {
      return {
        data: {
          id: keys[1],
          word: keys[1]
        }
      }
    }

    return {
      data: null
    }
  } catch (error) {
    throw new Error(getErrorMessageHelper(error))
  }
}
