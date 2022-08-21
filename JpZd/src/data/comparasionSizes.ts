import DataType from "../types/DataType.model";
import rand from "../utils/randomArrayElement";

export function comparasionSizes() {
  
}

const objectsPool= [
    {jp:'neko',pl:['kot','kota']},
    {jp:'sakana',pl:['ryba','ryby']},
    {jp:'nezumi',pl:['mysz','myszy']},
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


export function comparasion():DataType{// yori
    
    //a-wa b-yori adj desu

    const obj1 = rand(objectsPool)
    const obj2 = rand(objectsPool)
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

export function more():DataType{ //hou-ga 

    //a-no ho-ga adj desu

    const obj1 = rand(objectsPool)
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


