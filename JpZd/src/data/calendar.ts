import DataType from "../types/DataType.model"
import rand from "../utils/randomArrayElement"
import { numbers } from "./dictionary"

export function daysOfMonth() {
    const days = [
        { jp: "tsuitachi", pl: "1 dzień miesiąca" },
        { jp: "futsu-ka", pl: "2 dzień miesiąca" },
        { jp: "mik-ka", pl: "3 dzień miesiąca" },
        { jp: "yok-ka", pl: "4 dzień miesiąca" },
        { jp: "itsu-ka", pl: "5 dzień miesiąca" },
        { jp: "mui-ka", pl: "6 dzień miesiąca" },
        { jp: "nano-ka", pl: "7 dzień miesiąca" },
        { jp: "you-ka", pl: "8 dzień miesiąca" },
        { jp: "kokono-ka", pl: "9 dzień miesiąca" },
        { jp: "too-ka", pl: "10 dzień miesiąca" },
        { jp: "jyu-yok-ka", pl: "14 dzień miesiąca" },
        { jp: "hatsu-ka", pl: "20 dzień miesiąca" },
        { jp: "ni-jyu-yok-ka", pl: "24 dzień miesiąca" },
    ]

    const day = rand(days)

    return{
        romaji: day.jp,
        meaning: day.pl
    }
}

export function months() {

}

export function dates() {
    //cale daty
}

export function hoursPrepareData(){
//todo
}

export function hours(theme: string): DataType {
//bugi: czasem wyskakuje np 010:23 - usunąć to 0, i uważać bo przy dziesiątkach 1 i jednościach 0 nie jest jeden zero tylko dziesięć

  const h1=Math.floor(Math.random()*2)//dziesiątki czyli 0 lub 1, bo 0-12
  const h2=h1>0?Math.floor(Math.random()*2+1): Math.floor(Math.random()*10+1)//jedności bo 1-10 (nie mowi sie dziesiec zero) dla h1===0 i 0-2 dla 1
  const m1=Math.floor(Math.random()*6)//bo 0-60
  const m2=Math.floor(Math.random()*9+1)//bo 1-9
  const hour={
    jp:'',
    pl:h1.toString()+h2.toString()
  }
  const minute={
    jp:'0',
    pl:m1.toString()+m2.toString()
  };

  if(h1<1) hour.jp=numbers.ji[h2.toString()]
  if(h1===1) hour.jp='juu '+numbers.ji[h2.toString()]  

  console.log(minute.jp,numbers.hun[m2.toString()],m2.toString())

  if(m1===0) minute.jp=numbers.hun[m2.toString()]
  if(m1===1) minute.jp='juu '+numbers.hun[m2.toString()]
  if(m1===2) minute.jp='nijuu '+numbers.hun[m2.toString()]
  if(m1===3) minute.jp='sanjuu '+numbers.hun[m2.toString()]
  if(m1===4) minute.jp='yonjuu '+numbers.hun[m2.toString()]
  if(m1===5) minute.jp='gojuu '+numbers.hun[m2.toString()]

  return {
    romaji: 'Nan ji desu ka? '+hour.jp+' '+minute.jp,
    meaning: 'Która godzina? '+hour.pl+':'+minute.pl
  }
}

export function time() {
    //wczesniej pojutrze itp
}