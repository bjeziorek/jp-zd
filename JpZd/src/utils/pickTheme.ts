import { wordList } from "../data/dictionary"

export function pickThemePool(theme:string){
    
    return wordList[theme]
    switch(theme){
        case 'animals':
            return wordList.animals
        case 'food':
        case 'buildings':
        case 'professions':
            return wordList.professions
        case 'machines':
        default:
            console.log('nie rozpoznano tematu: '+theme+ ", pobrano zwierzątka, bo są fajne ;)")
    }
}