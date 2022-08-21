import { IonButton } from '@ionic/react';
import { useState } from 'react';
import DataType from '../types/DataType.model';
import './ExploreContainer.css';
import {countingAnimals,countingLongObjects, countingPeople} from '../data/numbers';
import {kanjiDict} from '../data/dictionary';
import {comparasion,more,theMost} from '../data/comparasionSizes';
import Kanji from '../types/Kanji.model';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [data,setData]=useState<DataType>(days());
  const [dataKanji,setDataKanji]=useState<Kanji>(kanjiDict('kwiat'));
  const [showToggleRomaji, setShowToggleRomaji]=useState('show')
  function romajiVisibility(){
    (showToggleRomaji==='show')
    ?setShowToggleRomaji('hide')
    :setShowToggleRomaji('show')
  }
  const [showToggleTranslation, setShowToggleTranslation]=useState('show')
  function translationiVisibility(){
    (showToggleTranslation==='show')
    ?setShowToggleTranslation('hide')
    :setShowToggleTranslation('show')
  }
  function days():DataType{
    //this const is recreated every time the function is called so new random values are assigned    
    const dayList: Array<DataType> = [ 
        {romaji:"tsuitachi",meaning:"1 dzień miesiąca"},
        {romaji:"futsu-ka",meaning:"2 dzień miesiąca"},
        {romaji:"mik-ka",meaning:"3 dzień miesiąca"},
        {romaji:"yok-ka",meaning:"4 dzień miesiąca"},
        {romaji:"itsu-ka",meaning:"5 dzień miesiąca"},
        {romaji:"mui-ka",meaning:"6 dzień miesiąca"},
        {romaji:"nano-ka",meaning:"7 dzień miesiąca"},
        {romaji:"you-ka",meaning:"8 dzień miesiąca"},
        {romaji:"kokono-ka",meaning:"9 dzień miesiąca"},
        {romaji:"too-ka",meaning:"10 dzień miesiąca"},
        {romaji:"jyu-yok-ka",meaning:"14 dzień miesiąca"},
        {romaji:"hatsu-ka",meaning:"20 dzień miesiąca"},
        {romaji:"ni-jyu-yok-ka",meaning:"24 dzień miesiąca"},
        {romaji:"Dono you-ni koko-e kimashitaka",meaning:"Jak tu przyszedłeś?"},
        {romaji:"Dou yatte kore-o tabemasuka",meaning:"Jak to się je?"},
        {romaji:"Koko-kara gakko-made dono-kurai kakarimasuka",meaning:"Ile zabiera [czasu przejście] stąd do szkoły?"},
        {romaji:"Koko-kara gakko-made dono-gurai desu ka",meaning:"Jak daleko [czas lub odległość] jest stąd do szkoły?"},
        {romaji:"Anata-wa dare desu-ka",meaning:"Kim jesteś?"},
        {romaji:"Dare-to Nihon-ni ikimasu-ka",meaning:"Z kim jedziesz do Japonii?"},
        {romaji:"Itsu Nihon-ni kimasu-ka",meaning:"Kiedy przyjeżdżasz do Japonii?"},
        {romaji:"Doko-de kaimashita-ka",meaning:"Gdzie kupiłeś?"},
        {romaji:"Doko-ee ikimasu-ka",meaning:"Gdzie idziesz?"},
        {romaji:"Nani-jin desu-ka",meaning:"Jakiej jesteś narodowości?"},
        {romaji:"Nan-jin desu-ka",meaning:"Ile jest osób?"},
        {romaji:"Nan desu-ka",meaning:"Co to jest?"},
        {romaji:"Nan-no hon desu-ka",meaning:"Co to za książka?"},
        {romaji:"Nan-sai",meaning:"Ile lat?"},
        {romaji:"Nan-ban",meaning:"Jaki numer?"},
        {romaji:"Jimusho-wa koko, soshite niwa-wa asoko desu.",meaning:"Biuro jest tu, a ogród tam dalej."},
        {romaji:"Watashi-wa gogo ji-ni nemasu.",meaning:"Chodzę spać o 10:00 wieczorem (dosł. po południu)."},
        {romaji:"Ashita-no asa hatarakimasu.",meaning:"Jutro rano pracuję."},
        {romaji:"Kinou-no ban hatarakimashita.",meaning:"Wczoraj wieczór pracowałem."},
        {romaji:"Jisho-wa dore desu-ka.",meaning:"Które to słownik?"},
        {romaji:"Ginkou-wa dono tatemono desu-ka.",meaning:"Który z tych budynków to bank?"},
        {romaji:"Gaikoku-go-o benkyou suru koto (no) -wa muzukashii desu.",meaning:"Uczenie się języka obcego jest trudne."},
        {romaji:"Heya-wa doko desu-ka? Heya-wa soko desu.",meaning:"Gdzie jest pokój? Pokój jest tam."},
        {romaji:"Aomori to iu ken-o shitte imasu-ka.",meaning:"Czy znasz prefekturę zwaną Aomori?"},
        {romaji:"Aomori to iu ken-ni sunde imasu.",meaning:"Mieszkam w prefekturze zwanej Aomori."},
        {romaji:"Watashi-wa Nihon-go-de tegami-o kakemasu.",meaning:"Piszę list po japońsku."},
        {romaji:"Watashi-wa hashi-de gohan-o tabemasu.",meaning:"Jem posiłek pałeczkami."},
        {romaji:"Watashi-wa Yuriko-san-ni hon-o agemashita.",meaning:"Dałem książkę pani Yuriko."},
        {romaji:"Watashi-wa Yuriko-san-ni Hihon-go-o oshiemasu.",meaning:"Uczę japońskiego panią Yuriko."},
        {romaji:"Watashi-wa Tanaka-san-kara (/ni) hon-o moraimashita.",meaning:"Dostałem książkę od pana Tanaki."},
        {romaji:"Watashi-wa Tanaka-san-kara (/ni) Nihon-go-o naraimasu.",meaning:"Uczę się japońskiego od pana Tanaki."},
        {romaji:"Kore-wa ooki-i desu.",meaning:"To jest duże."},
        {romaji:"Kore-wa ooki-kunai desu.",meaning:"To nie jest duże."},
        {romaji:"Atsui kuni-to samui kuni.",meaning:"Ciepły kraj i zimny kraj."},
        {romaji:"Ii hito-to warui hito.",meaning:"Dobry człowiek i zły człowiek."},
        {romaji:"Kono mise-wa yumei (bez na!) desu.",meaning:"Ten sklep jest znany(słynny)."},
        {romaji:"Kono kuni-wa kirei (bez na!) desu.",meaning:"Ten kraj jest piękny."},
        {romaji:"Kono kuni-wa kirei (bez na!) dewa arimasen.",meaning:"Ten kraj nie jest piękny (w pełni formalnie)."},
        {romaji:"Kono kuni-wa kirei (bez na!) ja nai desu.",meaning:"Ten kraj nie jest piękny (mniej formalnie)."},
        {romaji:"Koko wa kirei-na basho dewa aremasen.",meaning:"To (dosł. tu) nie jest ładne miejsce."},
        {romaji:"Koko wa kirei-na kuni desu.",meaning:"To (dosł. tu) jest piękny kraj."},
        {romaji:"Watashi-wa Nihon-ga suki desu.",meaning:"Ja lubię Japonię."},
        {romaji:"Watashi-wa Nihon-ga kirai desu.",meaning:"Ja nie lubię Japonii."},
        {romaji:"Watashi-wa Nihon-go-ga jozu desu.",meaning:"Ja jestem dobry w japońskim."},
        {romaji:"Watashi-wa Nihon-go-ga heta desu.",meaning:"Ja jestem słaby (kiepski) w japońskim."},
        {romaji:"Tsukue-no ue-ni hon ga arimasu.",meaning:"Na biurku jest książka."},
        {romaji:"Uchi-no mae-ni okasan ga imasu.",meaning:"Przed domem jest matka."},
        {romaji:"Watashi-no ushiro-ni inu ga imasu.",meaning:"Za mną jest pies."},
        {romaji:"Watashi-no tonari-ni atarashii tango-no hyou ga arimasu.",meaning:"Obok mnie jest nowa tabela ze słownictwem."},
        {romaji:"Ginkou-to yuubinkyouku-no aida-ni uchi-ga arimasu.",meaning:"Między bankiem a pocztą jest dom."},

      ///liczby!!!!



    ]
    return dayList[Math.floor(Math.random()*dayList.length)];
}

  function practiceNumbers():DataType{
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
    
      
  function rand(arr:any){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  

  return{
    romaji:""+where.jp+" "+animalNumber.jp+"-no "+animalType.jp+"-ga imasu",
    meaning:""+where.pl+jest_sa+animalNumber.pl+" "+declination
  }

  }

  function changeToCountingAnimals(){
    setData(countingAnimals())//(days())
  }
  function changeToCountingLongObjects(){
    setData(countingLongObjects())//(days())
  }
  function changeToCountingPeople(){
    setData(countingPeople())//(days())
  }
  function changeToAll(){
    setData(days())
  }
  function changeToComparasion(){
    setData(comparasion('animals'))
  }
  function changeToMore(){
    setData(more('animals'))
  }
  function changeToTheMost(){
    setData(theMost('animals'))
  }

  function changeToKanji(){
    const kanjiSet = ['kwiat','pszczoła','miód'];
    const i=Math.floor(Math.random()*kanjiSet.length)
    console.log(kanjiDict(kanjiSet[i]))
    setDataKanji(kanjiDict(kanjiSet[i]))
  }
  return (
    <div className="container">
      <IonButton onClick={changeToKanji}>Kanji</IonButton>
      <IonButton onClick={changeToCountingAnimals}>Animals</IonButton>
      <IonButton onClick={changeToCountingLongObjects}>LongObjects</IonButton>
      <IonButton onClick={changeToCountingPeople}>People</IonButton>
      <IonButton onClick={changeToComparasion}>Comparasion</IonButton>
      <IonButton onClick={changeToMore}>More</IonButton>
      <IonButton onClick={changeToTheMost}>theMost</IonButton>
      <IonButton onClick={changeToAll}>All</IonButton>
      <p></p>
      
      <p></p>
      <p>kanji: {dataKanji.kanji} {dataKanji.meaning.pl}</p>
      <p></p>
      <p></p>
      
      {
        (showToggleRomaji==='hide')
        ?<strong>{data.romaji+ " || "+data.kanji||'-'}</strong>
        :<strong>?</strong>
      }
      <p></p>
      <IonButton onClick={romajiVisibility}>{showToggleRomaji}</IonButton>
      <p></p>

      {
        (showToggleTranslation==='hide')
        ?<strong>{data.meaning}</strong>
        :<strong>?</strong>
      }
      <p></p>
      <IonButton onClick={translationiVisibility}>{showToggleTranslation}</IonButton>
      <p></p>
      <strong>{name}</strong>
      <p>xxx Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
