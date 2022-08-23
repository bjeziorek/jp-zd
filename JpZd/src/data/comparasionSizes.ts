import { Case } from "../types/Case.model";
import DataType from "../types/DataType.model";
import { pickThemePool } from "../utils/pickTheme";
import rand from "../utils/randomArrayElement";
import { wordList } from "./dictionary";

export function comparasionSizes(theme:string) {
  
}


function genderIndexCheck(obj:{jp:string,pl:Case,plGender:string}):number{
        console.log(obj)
        switch(obj.plGender){
            case 'm':
                return 0
            case 'ż':
                return 1
            case 'n':
                return 2
            default:
                console.log('blad rozpoznania rodzaju dla: '+obj.pl.M)
                return 0
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
    {jp:'se-ga takai',pl:['wyższy (w sensie wzrostu)','wyższa (w sensie wzrostu)','wyższe (w sensie wzrostu)']},
    {jp:'se-ga hikui',pl:['niższy (w sensie wzrostu)','niższa (w sensie wzrostu)','niższe (w sensie wzrostu)']},
    {jp:'utsukishii',pl:['piękniejszy','piękniejsza','piękniejsze']},
    {jp:'minikui',pl:['brzydszy','brzydsza','brzydsze']},
    {jp:'warui',pl:['gorszy','gorsza','gorsze']},
    {jp:'takai',pl:['wyższy','wyższa','wyższe']},
    {jp:'yasui',pl:['tańszy','tańsza','tańsze']},
    {jp:'ookii',pl:['większy','większa','większe']},
    {jp:'chiisai',pl:['mniejszy','mniejsza','mniejsze']},
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

function listCases(){
    wordList.animals.forEach(element => {
        console.log(
            "jest "+element.pl.M+", "+
            "nie ma "+element.pl.D+", "+
            "przyglądam się "+element.pl.C+", "+
            "widzę "+element.pl.B+", "+
            "idę z "+element.pl.N+", "+
            "myślę o "+element.pl.Msc+", "+
            "witaj "+element.pl.W+", "
            )
    })
}

export function comparasion(theme:string):DataType{// yori
    
    listCases()
    
    //a-wa b-yori adj desu

    const obj1 = rand(pickThemePool(theme))
    const obj2 = rand(pickThemePool(theme))
    const adj = rand(adjectivesPool)

    const jest_ma = (adj.jp==='hima')?'ma':'jest'
    const genderIndex = genderIndexCheck(obj1)

    return{
        romaji: obj1.jp+"-wa "+obj2.jp+"-yori "+adj.jp+" desuka?",
        meaning: "Czy "+obj1.pl.M+ " "+jest_ma+" "+adj.pl[genderIndex]+" od "+obj2.pl.D+"?"
      }
}

export function more(theme:string):DataType{ //hou-ga 

    //a-no ho-ga adj desu

    const obj1 = rand(pickThemePool(theme))
    const adj = rand(adjectivesPool)

    const jest_ma = (adj.jp==='hima')?'ma':'jest'
    const genderIndex = genderIndexCheck(obj1)

return{
        romaji: obj1.jp+"-no hou-ga "+adj.jp+" desu",
        meaning: obj1.pl.M+ " "+jest_ma+" "+adj.pl[genderIndex]
      }
}

export function whichOf(theme:string):DataType{ //dochira-ga

    //a-to b-to dochira-ga adj desuka

    const obj1 = rand(pickThemePool(theme))
    const obj2 = rand(pickThemePool(theme))
    const adj = rand(adjectivesPool)

    const jest_ma = (adj.jp==='hima')?'ma':'jest'
    
    return{
        romaji: obj1.jp+"-to "+obj2.jp+"-to dochira-ga "+adj.jp+" desuka",
        meaning: "Które z pomiędzy "+obj1.pl.D+ " i "+obj2.pl.D+" "+jest_ma+" "+adj.pl[2]+"?"
      }
}

export function theMost(theme:string):DataType{ //no naka de ichiban

    //a-to b-to c-no naka-de a/b/c-ga ichiban adj desuka

    const obj1 = rand(pickThemePool(theme))
    const obj2 = rand(pickThemePool(theme))
    const obj3 = rand(pickThemePool(theme))
    const adj = rand(adjectivesPool)

    const jest_ma = (adj.jp==='hima')?'ma':'jest'
    const aORbORc = [obj1,obj2,obj3][Math.floor(Math.random()*3)]
    const genderIndex = genderIndexCheck(aORbORc)

    return{
        romaji: obj1.jp+"-to "+obj2.jp+"-to "+obj3.jp+"-no naka-de "+aORbORc.jp+"-ga ichiban "+adj.jp+" desuka",
        meaning: "Czy z pomiędzy "+obj1.pl.D+", "+obj2.pl.D+" i "+obj3.pl.D+" "+aORbORc.pl.M+" "+jest_ma+" naj"+adj.pl[genderIndex]+"?"
      }
}


