import React from 'react'
import DataType from '../types/DataType.model';
import rand from '../utils/randomArrayElement';

export function countingAnimals():DataType{
        // gdzie ile_zwierzat jakie zwierze
    
        const wherePool = [
          {jp:"Watashi-no ie-ni",pl:"W moim domu"},
          {jp:"Tsukue-no ushiro-ni",pl:"Za biurkiem"},
          {jp:"Teburu-to beddo-no aida-ni",pl:"Między stołem a łóżkiem"},
          {jp:"Hachimitsu-no tonari-ni",pl:"Obok miodu"},
          {jp:"Hako-no naka-ni",pl:"W pudeku"},
          {jp:"Kasa-no shita-ni",pl:"Pod parasolem"},
          {jp:"Hana-no hidari-ni",pl:"Na lewo od kwiatka"},
          {jp:"Konpyuta-no migi-ni",pl:"Na prawo od komputera"},
        ];
    
        const animalNumberPool = [
          {jp: "ippiki", pl:"1"},
          {jp: "nihiki", pl:"2"},
          {jp: "sanbiki", pl:"3"},
          {jp: "yonhiki", pl:"4"},
          {jp: "gohiki", pl:"5"},
          {jp: "roppiki", pl:"6"},
          {jp: "nanahiki", pl:"7"},
          {jp: "happiki", pl:"8"},
          {jp: "kyuuhiki", pl:"9"},
          {jp: "juuppiki", pl:"10"},
        ]
    
        const animalTypesPool = [
          {jp: "neko", pl:["kot","koty","kotów"]},
          {jp: "inu", pl:["pies","psy","psów"]},
          {jp: "nazumi", pl:["mysz","myszy","myszy"]},
          {jp: "hato", pl:["gołąb","gołębie","gołębi"]},
          {jp: "suzume", pl:["wróbel","wróble","wróbli"]},
          {jp: "sakana", pl:["ryba","ryby","ryb"]},
          {jp: "ka / mosukiito", pl:["komar","komary","komarów"]},
          {jp: "hachi", pl:["osa / pszczoła/ szerszeń","osy / pszczoły / szerszenie","os / pszczół / szerszeni"]},
      ]
    
        let where=rand(wherePool)
        let animalNumber=rand(animalNumberPool)
        let animalType=rand(animalTypesPool)
        let jest_sa=(animalNumber.pl==='1'||parseInt(animalNumber.pl)>4)?" jest ":" są "
        let declination=(():string=>{
          if(animalNumber.pl==="1"){
            console.log(animalType.pl[0])
            return animalType.pl[0]
          }else if(parseInt(animalNumber.pl)>4){
            console.log(animalType.pl[2])
            return animalType.pl[2]
          }else{
            console.log(animalType.pl[1])
            return animalType.pl[1]
          }
        })()
        
      return{
        romaji: where.jp+" "+animalNumber.jp+"-no "+animalType.jp+"-ga imasu",
        meaning: where.pl+" "+jest_sa+" "+animalNumber.pl+" "+declination
      }
}

export function countingLongObjects(){
  
      const longObjectNumberPool = [
        {jp: "ippon", pl:"1"},
        {jp: "nihon", pl:"2"},
        {jp: "sanbon", pl:"3"},
        {jp: "yonhon", pl:"4"},
        {jp: "gohon", pl:"5"},
        {jp: "roppon", pl:"6"},
        {jp: "nanahon", pl:"7"},
        {jp: "happon", pl:"8"},
        {jp: "kyuuhon", pl:"9"},
        {jp: "juuppon", pl:"10"},
      ]
  
      const longObjectTypesPool = [
        {jp: "BIIRU", pl:["butelkę piwa","butelki piwa","butelek piwa"]},
        {jp: "kasa", pl:["parasol","parasole","parasoli"]},
        {jp: "enpitsu", pl:["ołówek","ołówki","ołówków"]},
        {jp: "BOORUPEN", pl:["długopis","długopisy","długopisów"]},
        {jp: "mannenhitsu", pl:["wieczne pióro","wieczne pióra","wiecznych piór"]},
    ]

    const verbPool = [
        {jp: "kaimashita", pl:"kupiłem"},
        {jp: "mimashita", pl:"widziałem"},
       // {jp: "sagashita", pl:"szukałem"},  //bez szukać, bo powoduje zupełnie inną odmianę przez przypadki - znalazłem ołówek, ale szukamłem ołówka
        {jp: "mitsukerimashita", pl:"znalazłem"},
        {jp: "nakunarimashita", pl:"zgubiłem"},
    ]
  
      let what=rand(longObjectTypesPool)
      let longObjectNumber=rand(longObjectNumberPool)
      let verb=rand(verbPool)
      
      let whatDeclination=(():string=>{
        if(longObjectNumber.pl==="1"){
          return what.pl[0]
        }else if(parseInt(longObjectNumber.pl)>4){
          return what.pl[2]
        }else{
          return what.pl[1]
        }
      })()

    return{
      romaji: what.jp+"-o "+longObjectNumber.jp+" "+verb.jp,
      meaning: verb.pl+" "+longObjectNumber.pl+" "+whatDeclination
    }
}

export function countingPeople(){
    const peopleNumberPool = [
        {jp: "hitori", pl:"1"},
        {jp: "futari", pl:"2"},
        {jp: "sannin", pl:"3"},
        {jp: "yonin", pl:"4"},
        {jp: "gonin", pl:"5"},
        {jp: "rokunin", pl:"6"},
        {jp: "nananin", pl:"7"},
        {jp: "hachinin", pl:"8"},
        {jp: "kyuunin", pl:"9"},
        {jp: "juunin", pl:"10"},
      ]
  
      const peopleTypesPool = [
        {jp: "ani", pl:["starszy brat","starszych braci","starszych braci"]},
        {jp: "ane", pl:["starsza siostra","starsze siostry","starszych sióstr"]},
        {jp: "imouto", pl:["młodsza siostra","młodsze siostry","młodszych sióstr"]},
        {jp: "otouto", pl:["młodszy brat","młodszych braci","młodszych braci"]},
        {jp: "tomodachi", pl:["przyjaciel","przyjaciół","przyjaciół"]},
    ]

  
      let peopleNumber=rand(peopleNumberPool)
      let peopleType=rand(peopleTypesPool)
      
      let peopleDeclination=(():string=>{
        if(peopleNumber.pl==="1"){
          return peopleType.pl[0]
        }else if(parseInt(peopleNumber.pl)>4){
          return peopleType.pl[2]
        }else{
          return peopleType.pl[1]
        }
      })()

    return{
      romaji: peopleType.jp+"-ga "+peopleNumber.jp+" imasu",
      meaning: "Mam "+peopleNumber.pl+" "+peopleDeclination
    }
}