import Dict from "../types/Dict.model"
import Kanji from "../types/Kanji.model"

export default function dictionary() {
  return 0
  }

function dictOutput(dict:any,key:string,trans:string){
    const filtered = (dict).filter((el:any)=>{return el.key===key&&el.translation.pl===trans})
    if(filtered[0]){
        if(filtered[0].kanji==='-'){
            return filtered[0].kana
        }else{
            return filtered[0].kanji
        }
    }else{
        return "brak wyniku dla: "+key+" i "+trans
    }
}

export function kanjiDict(meaning:string){

    const kanji:Array<Kanji>=[
        {
            meaning:{pl:'za'},
            kanji:'後',
            kunyomi:['うし‐ろ','あと','+'],
            onyomi:['ゴ','+']
        },
        {
            meaning:{pl:'mysz'},
            kanji:'鼠',
            kunyomi:['ねずみ','+'],
            onyomi:['ソ','+']
        },
        {
            meaning:{pl:'kwiat'},
            kanji:'花',
            kunyomi:['はな'],
            onyomi:['カ','ケ']
        },
        {
            meaning:{pl:'pszczoła'},
            kanji:'蜂',
            kunyomi:['はち'],
            onyomi:['ホウ']
        },
        {
            meaning:{pl:'miód'},
            kanji:'蜜',
            kunyomi:['-'],
            onyomi:['ミツ','ビツ']
        },
    ]
    const result =kanji.filter((el:Kanji)=>{return el.meaning.pl===meaning})
    console.log(result)
    return result[0]
}

export function dict(key:string,trans:string){
    //plants
    //food
    //furnitures big and small, things in home
    //electronic devices
    //people
    //animals
    const dict=[
        //plants
        {
            key: 'hana',
            romaji:'hana',
            kana:'はな',
            kanji:'花',
            translation:{
                pl: 'kwiat'
            }
        },
        //food
        {
            key: 'hachimitsu',
            romaji:'hachimitsu',
            kana:'はちみつ',
            kanji:'蜂蜜',
            translation:{
                pl: 'miód'
            }
        },
        //furnitures big and small, things in home
        {
            key: 'tsukue',
            romaji:'tsukue',
            kana:'つくえ',
            kanji:'机',
            translation:{
                pl: 'biurko'
            }
        },
        {
            key: 'TEEBURU',
            romaji:'TEEBURU',
            kana:'テーブル',
            kanji:'-',
            translation:{
                pl: 'stół'
            }
        },
        {
            key: 'hako',
            romaji:'hako',
            kana:'はこ',
            kanji:'箱',
            translation:{
                pl: 'pudełko'
            }
        },
        {
            key: 'kasa',
            romaji:'kasa',
            kana:'かさ',
            kanji:'傘',
            translation:{
                pl: 'parasol'
            }
        },
        //electronic devices
        {
            key: 'KONPYUUTA',
            romaji:'KONPYUUTA',
            kana:'コンピュータ',
            kanji:'-',
            translation:{
                pl: 'komputer'
            }
        },
        //people
        {
            key: 'watashi',
            romaji:'watashi',
            kana:'わたし',
            kanji:'私',
            translation:{
                pl: 'ja'
            }
        },
        {
            key: 'anata',
            romaji:'anata',
            kana:'あなた',
            kanji:'-',
            translation:{
                pl: 'ty'
            }
        },
        {
            key: 'kare',
            romaji:'kare',
            kana:'かれ',
            kanji:'彼',
            translation:{
                pl: 'on'
            }
        },
        {
            key: 'kanojo',
            romaji:'kanojo',
            kana:'かのじょ',
            kanji:'彼女',
            translation:{
                pl: 'ona'
            }
        },
        //animals
        {
            key: 'neko',
            romaji:'neko',
            kana:'ねこ',
            kanji:'猫',
            translation:{
                pl: 'kot'
            }
        },
        {
            key: 'inu',
            romaji: 'inu',
            kana: 'いぬ',
            kanji: '犬',
            translation:{
                pl: 'pies'
            }
        },
        {
            key: 'nezumi',
            romaji: 'nezumi',
            kana: 'ネズミ',
            kanji: '鼠',
            translation:{
                pl: 'mysz'
            }
        },
        {
            key: 'suzume',
            romaji: 'suzume',
            kana: 'すずめ',
            kanji: '雀',
            translation:{
                pl: 'wróbel'
            }
        },
        {
            key: 'hato',
            romaji: 'hato',
            kana: 'はと',
            kanji: '鳩',
            translation:{
                pl: 'gołąb'
            }
        },
        {
            key: 'ka',
            romaji: 'ka',
            kana: 'か',
            kanji: '蚊',
            translation:{
                pl: 'komar'
            }
        },
        {
            key: 'MOSUKIITO',
            romaji: 'MOSUKIITO',
            kana: 'モスキート',
            kanji: '-',
            translation:{
                pl: 'komar'
            }
        },
        {
            key: 'sakana',
            romaji: 'sakana',
            kana: 'さかな',
            kanji: '魚',
            translation:{
                pl: 'ryba'
            }
        },
        {
            key: 'hachi',
            romaji: 'hachi',
            kana: 'はち',
            kanji: '蜂',
            translation:{
                pl: 'pszczoła / osa / szerszeń'
            }
        },
    ]
    return dictOutput(dict,key,trans)
}

