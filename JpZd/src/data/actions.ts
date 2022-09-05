import { teForm, verbs, wordList } from './dictionary';
import DataType from "../types/DataType.model";
import { pickThemePool } from "../utils/pickTheme";
import rand from "../utils/randomArrayElement";

export function twoVerbsAtOnce(theme:string):DataType{
    const who = rand(wordList[theme])
    const verb1 = rand(verbs.pool1)
    const verb2 = rand(verbs.pool1)
    return{
        romaji:who.jp+'-wa '+teForm(verb1.jp)+', '+verb2.jp,
        meaning:who.pl.M+ ' będzie '+verb1.pl.niedokonany+' i '+verb2.pl.niedokonany
    }
}
export function twoVerbsOneByOne(theme:string):DataType{
    const who = rand(wordList[theme])
    const verb1 = rand(verbs.pool1)
    const verb2 = rand(verbs.pool1)
    return{
        romaji:who.jp+'-wa '+teForm(verb1.jp)+'-kara, '+verb2.jp,
        meaning:who.pl.M+ ' będzie '+verb1.pl.niedokonany+', a potem '+verb2.pl.niedokonany
    }
}

export function wantToDo(theme:string):DataType{
    
    function taiForm(verb:string){
        //exceptions
        if(verb==='suru'){
            return 'shitai'
        }
        

        if(verb.match(/iru$|eru$/)){
            return verb.slice(0,-2)+'tai'
        }else{
            return verb.slice(0,-1)+'itai'
        }
        
    }

    const what = rand(pickThemePool(theme))
    const verb = rand(verbs.pool1)
    const bar = verb.particle.jp?'-':' '
console.log(verb,what)
    return {
        romaji:/*what.jp + bar+ verb.particle.jp+' '+*/taiForm(verb.jp),
        meaning:'Chcę '+verb.pl.dokonany/*+' '+verb.particle.pl.txt+' '+what.pl[verb.particle.pl.case]*/
    }
}

export function give2(theme:string):DataType{

    const thingsPool=[
        {jp:['tabemono','kuremasu'],pl:['dał/a mi','jedzenie']},
        {jp:['nomimono','kuremasu'],pl:['dał/a mi','picie']},
        {jp:['mizu','kuremasu'],pl:['dał/a mi','wodę']},
        {jp:['KOOHII','kuremasu'],pl:['dał/a mi','kawę']},
        {jp:['koucha','kuremasu'],pl:['dał/a mi','czarną herbatę']},
        {jp:['ocha','kuremasu'],pl:['dał/a mi','zieloną herbatę']},
        {jp:['hana','kuremasu'],pl:['dał/a mi','kwiaty']},
        {jp:['okurimono','kuremasu'],pl:['dał/a mi','prezent']},
    ]

    const uchi=rand(pickThemePool('myFamily'))
    const soto = rand(pickThemePool('professions'))

    function person(){
        const isSoto=Math.random()>0.5?true:false
        const who=isSoto?soto:uchi
        return{
            isSoto,
            who
        }
    }

    const person1=person()
    const person2=person()
    const animal = rand(pickThemePool('animals'))//Math.random()>0.5?theme:'family'))
   const verb=person2.isSoto?'agemasu':'kuremasu'

    return{
        romaji:person1.who.jp+'-wa '+person2.who.jp+'-ni '+animal.jp+'-o '+verb,
        meaning:person1.who.pl.M+' daje '+person2.who.pl.C+' '+animal.pl.B
    }
    // return{
    //     romaji:animal1.jp+'-wa watashi-ni '+what.jp[0]+'-o '+what.jp[1],
    //     meaning:animal1.pl.M+' dał/a mi '+what.pl.B
    // }

}
export function receive(theme:string):DataType{

    const thingsPool=[
        {jp:['tabemono','moraimashita'],pl:['otrzymałem','jedzenie']},
        {jp:['nomimono','moraimashita'],pl:['otrzymałem','picie']},
        {jp:['mizu','moraimashita'],pl:['otrzymałem','wodę']},
        {jp:['KOOHII','moraimashita'],pl:['otrzymałem','kawę']},
        {jp:['koucha','moraimashita'],pl:['otrzymałem','czarną herbatę']},
        {jp:['ocha','moraimashita'],pl:['otrzymałem','zieloną herbatę']},
        {jp:['hana','moraimashita'],pl:['otrzymałem','kwiaty']},
        {jp:['okurimono','moraimashita'],pl:['otrzymałem','prezent']},
    ]

    const what = rand(thingsPool)
    const animal1 = rand(pickThemePool(theme))//Math.random()>0.5?theme:'family'))
   
    return{
        romaji:'Watashi-wa '+animal1.jp+'-ni/kara '+what.jp[0]+'-o '+what.jp[1],
        meaning:'Otrzymałem '+what.pl[1]+' od '+animal1.pl.D
    }
}

export function give(theme:string):DataType{

    const placePool=[
        {jp:'hako',pl:'do pudełka'},
        {jp:'kaban',pl:'do torebki'},
        {jp:'tsukue',pl:'na biurko'},
        {jp:'ginkou',pl:'do banku'},
    ]
    const thingsPool=[
        {jp:['tabemono','agemasu'],pl:['daje','jedzenie']},
        {jp:['nomimono','agemasu'],pl:['daje','picie']},
        {jp:['mizu','agemasu'],pl:['daje','wodę']},
        {jp:['KOOHII','agemasu'],pl:['daje','kawę']},
        {jp:['koucha','agemasu'],pl:['daje','czarną herbatę']},
        {jp:['ocha','agemasu'],pl:['daje','zieloną herbatę']},
        {jp:['nihongo','oshiemasu'],pl:['uczy','japońskiego']},
        {jp:['POORANDO-go','oshiemasu'],pl:['uczy','polskiego']},
    ]

    
   // const giveOrplace = Math.random()>0.5?'give':'place'
   // const where = rand(giveOrplace==='give'?thingsPool:placePool)
    const what = rand(thingsPool)
    const animal1 = rand(pickThemePool(theme))//Math.random()>0.5?theme:'family'))
    const animal2 = rand(pickThemePool(theme))//Math.random()>0.5?theme:'family'))
    
    // słon daje kotu jedzenie
    // slon daje kota na stół
    return{
        romaji:animal2.jp+'-wa '+animal1.jp+'-ni '+what.jp[0]+'-o '+what.jp[1],
        meaning:animal2.pl.M+' '+what.pl[0]+' '+animal1.pl[what.jp[1]==='agemasu'?'C':'B']+' '+what.pl[1]
    }
}

export function place(){
    //tak samo jak agemasu? MasaSensei #10
}
