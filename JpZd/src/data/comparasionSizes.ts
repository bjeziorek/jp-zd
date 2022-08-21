import DataType from "../types/DataType.model";
import rand from "../utils/randomArrayElement";
import { wordList } from "./dictionary";

export function comparasionSizes(theme:string) {
  
}

function pickThemePool(theme:string){
    switch(theme){
        case 'animals':
            return animalsPool
        case 'food':
        case 'buildings':
        case 'professions':
        case 'machines':
        default:
            console.log('nie rozpoznano tematu: '+theme+ ", pobrano zwierzątka, bo są fajne ;)")
    }

}

const animalsPool= [//kto, co || kogo, czego
    {jp:'neko',pl:['kot','kota']},
    {jp:'sakana',pl:['ryba','ryby']},
    {jp:'nezumi',pl:['mysz','myszy']},
    {jp:'ka',pl:['komar','komara']},
    {jp:'hato',pl:['gołąb','gołębia']},
    {jp:'suzume',pl:['wróbel','wróbla']},
    {jp:'sou',pl:['słoń','słonia']},
    {jp:'tori',pl:['ptak','ptaka']},
    {jp:'HAMUSUTAA',pl:['chomik','chomika']},
    {jp:'uma',pl:['koń','konia']},
    {jp:'ushi',pl:['krowa','krowy']},
    {jp:'niwatori',pl:['kura','kury']},
    {jp:'ari',pl:['mrówka','mrówki']},
    {jp:'shishiko',pl:['lew','lwa']},
    {jp:'saru',pl:['małpa','małpy']},
    {jp:'usagi',pl:['królik','królika']},
    {jp:'hitsuji',pl:['owca','owcy']},
    {jp:'buta',pl:['świnia','świni']},
    {jp:'jinchou',pl:['pingwin','pingwina']},
    {jp:'ookami',pl:['wilk','wilka']},
    {jp:'kuma',pl:['niedźwiedź','niedźwiedzia']},
    {jp:'risu',pl:['wiewiórka','wiewiórka']},
    {jp:'washi',pl:['orzeł','orła']},
    {jp:'taka',pl:['jastrząb','jastrzębia']},
    {jp:'wani',pl:['krokodyl','krokodyla']},
    {jp:'shika',pl:['sarna','sarny']},
    {jp:'inoshishi',pl:['dzik','dzika']},
]

const adjectivesPool=[
    {jp:'ookii',pl:['większy','większa','większe']},
    {jp:'atsui',pl:['gorętszy','gorętsza','gorętsze']},
    {jp:'chikai',pl:['bliżej','bliżej','bliżej']},
    {jp:'tooi',pl:['dalej','dalej','dalej']},
    {jp:'hayai',pl:['szybszy','szybsza','szybsze']},
    {jp:'osoi',pl:['wolniejszy','wolniejsza','wolniejsze']},
    {jp:'atatakai',pl:['cieplejszy','cieplejsza','cieplejsze']},
    {jp:'suzushii',pl:['zimniejszy','zimniejsza','zimniejsze']},
    {jp:'omoi',pl:['cięższy','cięższa','cięższe']},
    {jp:'karui',pl:['lżejszy','lżejsza','lżejsze']},
    {jp:'nagai',pl:['dłuższy','dłuższa','dłuższe']},
    {jp:'mijikai',pl:['krótszy','którsza','krótsze']},
    {jp:'amai',pl:['słodszy w smaku','słodsza w samku','słodsze w smaku']},
    {jp:'karai',pl:['ostrzejszy w smaku','ostrzejsza w smaku','ostrzejsze w smaku']},
    {jp:'isogashii',pl:['bardziej zajęty','bardziej zajęta','bardziej zajęte']},
    {jp:'hima',pl:['więcej wolnego czasu','więcej wolnego czasu','więcej wolnego czasu']},
]


export function comparasion(theme:string):DataType{// yori
    wordList.animals.forEach(element => {
        console.log(element.pl)
    });
    
    //a-wa b-yori adj desu

    const obj1 = rand(pickThemePool(theme))
    const obj2 = rand(pickThemePool(theme))
    const adj = rand(adjectivesPool)

    const jest_ma = (adj.jp==='hima')?'ma':'jest'
    const genderIndex = (()=>{
        switch(obj1.pl[0]){
            case 'kot':
                return 0
            case 'ryba':
            case 'mysz':
                return 1
            default:
                console.log('blad rozpoznania rodzaju dla: '+obj1.pl[0])
                return 0
        }
    })()

return{
        romaji: obj1.jp+"-wa "+obj2.jp+"-yori "+adj.jp+" desuka?",
        meaning: "Czy "+obj1.pl[0]+ " "+jest_ma+" "+adj.pl[genderIndex]+" od "+obj2.pl[1]+"?"
      }
}

export function more(theme:string):DataType{ //hou-ga 

    //a-no ho-ga adj desu

    const obj1 = rand(pickThemePool(theme))
    const adj = rand(adjectivesPool)

    const jest_ma = (adj.jp==='hima')?'ma':'jest'
    const genderIndex = (()=>{
        switch(obj1.pl[0]){
            case 'kot':
                return 0
            case 'ryba':
            case 'mysz':
                return 1
            default:
                console.log('blad rozpoznania rodzaju dla: '+obj1.pl[0])
                return 0
        }
    })()

return{
        romaji: obj1.jp+"-no hou-ga "+adj.jp+" desu",
        meaning: obj1.pl[0]+ " "+jest_ma+" "+adj.pl[genderIndex]
      }

}

export function theMost(theme:string):DataType{ //no naka de ichiban

    //a-to b-to c-no naka-de a/b/c-ga ichiban adj desuka

    const obj1 = rand(pickThemePool(theme))
    const obj2 = rand(pickThemePool(theme))
    const obj3 = rand(pickThemePool(theme))
    const adj = rand(adjectivesPool)

    const jest_ma = (adj.jp==='hima')?'ma':'jest'
    const genderIndex = (()=>{
        switch(obj1.pl[0]){
            case 'kot':
                return 0
            case 'ryba':
            case 'mysz':
                return 1
            default:
                console.log('blad rozpoznania rodzaju dla: '+obj1.pl[0])
                return 0
        }
    })()

    const aORbORc = [obj1,obj2,obj3][Math.floor(Math.random()*3)]

return{
        romaji: obj1.jp+"-to "+obj2.jp+"-to "+obj3.jp+"-no naka-de "+aORbORc.jp+"-ga ichiban "+adj.jp+" desuka",
        meaning: "Czy z pomiędzy "+obj1.pl[1]+", "+obj2.pl[1]+" i "+obj3.pl[1]+" "+aORbORc.pl[0]+" "+jest_ma+" naj"+adj.pl[genderIndex]+"?"
      }

}


