import { IonButton } from '@ionic/react';
import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

interface DataType{
  romaji: string,
  meaning: string,
  characters?: string
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [data,setData]=useState<DataType>(days());
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
        {romaji:"Watashi-wa Yuriko-san-ni hon-o agemasu.",meaning:"Dałem książkę pani Yuriko."},

      ///liczby!!!!



    ]
    return dayList[Math.floor(Math.random()*dayList.length)];
}
  function change(){
    setData(days())
  }
  return (
    <div className="container">
      <IonButton onClick={change}>click</IonButton>
      <p></p>
      
      <p></p>
      
      {
        (showToggleRomaji==='hide')
        ?<strong>{data.romaji}</strong>
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
