export default interface Dict{
    key:string,
    romaji:string,
    kana?:string,
    kanji?:string,
    translation:Array<{pl:string,en?:string}>
}