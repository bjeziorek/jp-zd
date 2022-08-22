import { wordList } from "../data/dictionary"

export function pickThemePool(theme:string){
    switch(theme){
        case 'animals':
            return wordList.animals
        case 'food':
        case 'buildings':
        case 'professions':
        case 'machines':
        default:
            console.log('nie rozpoznano tematu: '+theme+ ", pobrano zwierzątka, bo są fajne ;)")
    }
}