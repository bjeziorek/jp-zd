import DataType from '../types/DataType.model';
import { pickThemePool } from '../utils/pickTheme';
import rand from '../utils/randomArrayElement';

export function likeDislike(theme:string):DataType{
    const verbList=[
        {jp:'suki',pl:'lubi'},
        {jp:'kirei',pl:'nie lubi'},
    ]
    const obj1 = rand(pickThemePool(theme))
    const obj2 = rand(pickThemePool(theme))
    const verb=rand(verbList)

    return {
        romaji:obj1.jp+'-wa '+obj2.jp+'-ga '+verb.jp+' desu',
        meaning: obj1.pl.M+' '+verb.pl+' '+obj2.pl.D
    }
}

export function goodBadAt(theme:string):DataType{
    const verbList=[
        {jp:'jouzu',pl:'dobry w'},
        {jp:'heta',pl:'słaby w'},
    ]

    let whatPool = [
        {jp: 'nihongo', pl: 'japońskim'},
        {jp: 'eigo', pl: 'angielskim'},
        {jp: 'ryouri', pl: 'gotowaniu'},
        {jp: 'ryouri-o tsukuru', pl: 'gotowaniu posiłków'},
        {jp: 'asobi', pl: 'zabawie'},
        {jp: 'SUPOOTSU', pl: 'sporcie'},
        {jp: 'kanji-o oboeru', pl: 'zapamiętywaniu kanji'},
        {jp: 'PIANO', pl: '(graniu na) pianinie'},
        {jp: 'GITAA', pl: '(graniu na) gitarze'},
        {jp: 'e-o kaku', pl: 'rysowaniu obrazów'},
    ]

    const obj1 = rand(pickThemePool(theme))
    const what = rand(whatPool)
    const verb=rand(verbList)

    return {
        romaji:obj1.jp+'-wa '+what.jp+'-ga '+verb.jp+' desu',
        meaning: obj1.pl.M+' jest '+verb.pl+' '+what.pl
    }
}