export default interface DataType{
    romaji: string,
    meaning: string,
    kana?: string,
    kanji?: string,
    characters?: string

    lang1?:string,
    lang1transcription?:string,
    lang2?:string,
    lang2transcription?:string
  }