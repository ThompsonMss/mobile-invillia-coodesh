export interface ItemDictionaryModel {
  word: string
  phonetic?: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License2
  sourceUrls: string[]
}

interface Phonetic {
  audio: string
  sourceUrl?: string
  license?: License
  text?: string
}

interface License {
  name: string
  url: string
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

interface Definition {
  definition: string
  synonyms: any[]
  antonyms: any[]
  example?: string
}

interface License2 {
  name: string
  url: string
}
