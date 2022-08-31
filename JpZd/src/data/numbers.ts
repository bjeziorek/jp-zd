import DataType from '../types/DataType.model';
import { pickThemePool } from '../utils/pickTheme';
import rand from '../utils/randomArrayElement';
import { dict } from './dictionary';

export function countingAnimals():DataType{

        const whosePool = [
            {jp:"watashi",pl:"mój"},
            {jp:"anata",pl:"twój"},
            {jp:"kanojo",pl:"jej"},
            {jp:"kare",pl:"jego"},
            {jp:"sensei",pl:"nauczycielski"},
            {jp:"gakusei",pl:"studencki"},
            {jp:"kaishain",pl:"pracowniczy"},
        ]
        

        const placePool = [
            {jp:"ie",pl:["domu","domem","domu","domu"]},
            {jp:"tsukue",pl:["biurku","biurkiem","biurka","biurku"]},
            {jp:"hachimitsu",pl:["miodzie","miodem","miodu","miodzie"]},
            {jp:"hako",pl:["pudełku","pudełkiem","pudełka","pudełku"]},
            {jp:"kasa",pl:["parasolu","parasolem","parasola","parasolu"]},
            {jp:"hana",pl:["kwiatek","kwiatkiem","kwiatka","kwiatku"]},
            {jp:"KONPYUUTA",pl:["komputerze","komputerem","komputera","komputerze"]},
          ];

        const locationPool = [
          {jp:"naka",pl:"w"},
          
          {jp:"ushiro",pl:"za"}, 
          {jp:"mae",pl:"przed"},
          {jp:"shita",pl:"pod"},
          
          {jp:"tonari",pl:"obok"},
          {jp:"hidari",pl:"na lewo od"},
          {jp:"migi",pl:"na prawo od"},

          {jp:"ue",pl:"na"}
        ];
    

        // const wherePool = [
        //     {jp:"Watashi-no ie-ni",pl:"W moim domu"},
        //     {jp:"Tsukue-no ushiro-ni",pl:"Za biurkiem"},
        //     {jp:"Teburu-to beddo-no aida-ni",pl:"Między stołem a łóżkiem"},
        //     {jp:"Hachimitsu-no tonari-ni",pl:"Obok miodu"},
        //     {jp:"Hako-no naka-ni",pl:"W pudeku"},
        //     {jp:"Kasa-no shita-ni",pl:"Pod parasolem"},
        //     {jp:"Hana-no hidari-ni",pl:"Na lewo od kwiatka"},
        //     {jp:"Konpyuta-no migi-ni",pl:"Na prawo od komputera"},
        //   ];
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
          {jp: "nezumi", pl:["mysz","myszy","myszy"]},
          {jp: "hato", pl:["gołąb","gołębie","gołębi"]},
          {jp: "suzume", pl:["wróbel","wróble","wróbli"]},
          {jp: "sakana", pl:["ryba","ryby","ryb"]},
          {jp: "ka", pl:["komar","komary","komarów"]},
          {jp: "MOSUKIITO", pl:["komar","komary","komarów"]},
          {jp: "hachi", pl:["osa / pszczoła/ szerszeń","osy / pszczoły / szerszenie","os / pszczół / szerszeni"]},
      ]
    
        //let where=rand(wherePool)
        let whose=rand(whosePool)
        let place=rand(placePool)
        let location=rand(locationPool)
        let animalNumber=rand(animalNumberPool)
        let animalType=rand(animalTypesPool)
        let jest_sa=(animalNumber.pl==='1'||parseInt(animalNumber.pl)>4)?" jest ":" są "
        let declination=(():string=>{
          if(animalNumber.pl==="1"){
            return animalType.pl[0]
          }else if(parseInt(animalNumber.pl)>4){
            return animalType.pl[2]
          }else{
            return animalType.pl[1]
          }
        })()
        function checkDeclination(){
            switch(location.pl){
                case 'w':
                    return 0
                case 'za':
                case 'przed':
                case 'pod':
                    return 1
                case 'obok':
                case 'na lewo od':
                case 'na prawo od':
                    return 2
                case 'na':
                    return 3
                default: 
                    console.log("nierozpoznana odmiana przez przypadki dla: "+location.pl)
                    return 0
            }
            
        }

      return{
        romaji: place.jp+"-no "+location.jp+"-ni "+animalNumber.jp+"-no "+animalType.jp+"-ga imasu. ",
        kanji: dict(animalType.jp,animalType.pl[0]),
        meaning: location.pl+" "+place.pl[checkDeclination()]+" "+jest_sa+" "+animalNumber.pl+" "+declination
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
        {jp: "ani", pl:["starszego brata","starszych braci","starszych braci"]},
        {jp: "ane", pl:["starszą siostrę","starsze siostry","starszych sióstr"]},
        {jp: "imouto", pl:["młodszą siostrę","młodsze siostry","młodszych sióstr"]},
        {jp: "otouto", pl:["młodszego brata","młodszych braci","młodszych braci"]},
        {jp: "tomodachi", pl:["przyjaciela","przyjaciół","przyjaciół"]},
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

export function age(theme:string){
  const agePool=[
    {jp:'issai',pl:'1 rok'},
    {jp:'ni-sai',pl:'2 lata'},
    {jp:'san-sai',pl:'3 lata'},
    {jp:'yon-sai',pl:'4 lata'},
    {jp:'go-sai',pl:'5 lat'},
    {jp:'roku-sai',pl:'6 lat'},
    {jp:'nana-sai',pl:'7 lat'},
    {jp:'hassai',pl:'8 lat'},
    {jp:'kyuu-sai',pl:'9 lat'},
    {jp:'juu-sai',pl:'10 lat'},
    {jp:'juu-issai',pl:'11 lat'},
    {jp:'juu-ni-sai',pl:'12 lat'},
    {jp:'juu-san-sai',pl:'13 lat'},
    {jp:'juu-yon-sai',pl:'14 lat'},
    {jp:'juu-go-sai',pl:'15 lat'},
    {jp:'juu-roku-sai',pl:'16 lat'},
    {jp:'juu-nana-sai',pl:'17 lat'},
    {jp:'juu-hassai',pl:'18 lat'},
    {jp:'juu-kyuu-sai',pl:'19 lat'},
    {jp:'hatachi',pl:'20 lat'},
    {jp:'ni-juu-issai',pl:'21 lat'},
    {jp:'ni-juu-ni-sai',pl:'22 lata'},
    {jp:'ni-juu-san-sai',pl:'23 lata'},
    {jp:'ni-juu-yon-sai',pl:'24 lata'},
    {jp:'ni-juu-go-sai',pl:'25 lat'},
    {jp:'ni-juu-roku-sai',pl:'26 lat'},
    {jp:'ni-juu-nana-sai',pl:'27 lat'},
    {jp:'ni-juu-hassai',pl:'28 lat'},
    {jp:'ni-juu-kyuu-sai',pl:'29 lat'},
    {jp:'san-juu-issai',pl:'31 lat'},
    {jp:'yon-juu-sai',pl:'48 lat'},
    {jp:'go-juu-ni-sai',pl:'52 lata'},
    {jp:'roku-juu-kyuu-sai',pl:'69 lat'},
  ]

  const animal = rand(pickThemePool(theme))
  const person= rand(pickThemePool(theme))
  const age = rand(agePool)
  
  return{
    romaji:person.jp+'-no '+animal.jp+'-wa '+age.jp+' desu',
    meaning:animal.pl.M+' '+person.pl.D+' ma '+age.pl
  }
}