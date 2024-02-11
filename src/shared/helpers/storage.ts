import AsyncStorage from '@react-native-async-storage/async-storage'

async function setItem(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value)
}

async function getItem(key: string): Promise<string | null> {
  return await AsyncStorage.getItem(key)
}

async function getAllKeys(): Promise<readonly string[]> {
  return await AsyncStorage.getAllKeys()
}

async function removeItem(key: string): Promise<void> {
  await AsyncStorage.removeItem(key)
}

export const storage = {
  setItem,
  getItem,
  getAllKeys,
  removeItem
}
