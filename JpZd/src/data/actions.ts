import DataType from "../types/DataType.model";
import { pickThemePool } from "../utils/pickTheme";
import rand from "../utils/randomArrayElement";

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
        romaji:animal2.jp+'-wa '+animal1.jp+'-ni '+what.jp[0]+' '+what.jp[1],
        meaning:animal2.pl.M+' '+what.pl[0]+' '+animal1.pl[what.jp[1]==='agemasu'?'C':'B']+' '+what.pl[1]
    }
}

export function place(){
    //tak samo jak agemasu? MasaSensei #10
}

export function receive(theme:string):DataType{

    return{
        romaji:'',
        meaning:''
    }
}