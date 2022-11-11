import { IonButton } from "@ionic/react";
import { useState } from "react";
import DataType from "../types/DataType.model";
import "./Jp.css";
import {
  age,
 // countingAnimals,
  countingLongObjects,
  countingPeople,
  generalCounting,
  prices,
} from "../data/numbers";
import { kanjiDict } from "../data/dictionary";
import { comparasion, more, theMost, whichOf } from "../data/comparasionSizes";
import Kanji from "../types/Kanji.model";
import { can, goodBadAt, likeDislike, needWantHave } from "../data/gaParticle";
import { hours } from "../data/Grammar/JpGrammar/hours/hours";
import { hurts } from "../data/Grammar/JpGrammar/hurts/hurts";
import rand from "../utils/randomArrayElement";
import {
  give2,
  give,
  receive,
  twoVerbsAtOnce,
  twoVerbsOneByOne,
  continues,
  wayToDo,
  proposition1,
  proposition2,
  also,
  AandB,
  goToWith,
  doWith,
} from "../data/actions";
import { chigaimasu, basics, which, whichOfAny, polite, genericPronoun, what, when, withWho, where } from "../data/basics";
import { tellMe } from "../data/Grammar/JpGrammar/tellMe/tellMe";
import { youKnow } from "../data/Grammar/JpGrammar/youKnow/youKnow";
import { youKnowIsAorB } from "../data/Grammar/JpGrammar/youKnowIsAorB/youKnowIsAorB";
import { howIs } from "../data/Grammar/JpGrammar/howIs/howIs";
import { but } from "../data/Grammar/JpGrammar/but/but";
import { negativeQuestion } from "../data/Grammar/JpGrammar/negativeQuestion/negativeQuestion";
import { substantivisator1 } from "../data/Grammar/JpGrammar/substantivisator1/substantivisator1";
import { assuranceNoun } from "../data/Grammar/JpGrammar/assuranceNoun/assuranceNoun";
import { assuranceAdj } from "../data/Grammar/JpGrammar/assuranceAdj/assuranceAdj";
import { assuranceVerb } from "../data/Grammar/JpGrammar/assuranceVerb/assuranceVerb";
import { putOnClothes } from "../data/Grammar/JpGrammar/putOnClothes/putOnClothes";
import { putOutClothes } from "../data/Grammar/JpGrammar/putOutClothes/putOutClothes";
import { placementAndCounting } from "../data/Grammar/JpGrammar/placementAndCounting/placementAndCounting";
import { AIsButBIsnt } from "../data/Grammar/JpGrammar/AIsButBIsnt/AIsButBIsnt";
import { ACanEtcButBCantEtc } from "../data/Grammar/JpGrammar/ACanEtcButBCantEtc/ACanEtcButBCantEtc";
import { ADoButBDoesnt } from "../data/Grammar/JpGrammar/ADoButBDoesnt/ADoButBDoesnt";
import { including } from "../data/Grammar/JpGrammar/including/including";
import { thinkThatNoun } from "../data/Grammar/JpGrammar/thinkThatNoun/thinkThatNoun";
import { thinkThatNaAdj } from "../data/Grammar/JpGrammar/thinkThatNaAdj/thinkThatNaAdj";
import { thinkThatIAdj } from "../data/Grammar/JpGrammar/thinkThatIAdj/thinkThatIAdj";
import { thinkThatVerb } from "../data/Grammar/JpGrammar/thinkThatVerb/thinkThatVerb";
import { inPlace } from "../data/Grammar/JpGrammar/inPlace/inPlace";
import { or } from "../data/Grammar/JpGrammar/Or/Or";
import { howTo } from "../data/Grammar/JpGrammar/howTo/howTo";
import { fromTo } from "../data/Grammar/JpGrammar/fromTo/fromTo";
import { haveThingWhich } from "../data/Grammar/JpGrammar/haveThingWhich/haveThingWhich";
import { nationality } from "../data/Grammar/JpGrammar/nationality/nationality";
import { thingWhich } from "../data/Grammar/JpGrammar/thingWhich/thingWhich";
import { sthWhich } from "../data/Grammar/JpGrammar/sthWhich/sthWhich";
import { thingILikeDislike } from "../data/Grammar/JpGrammar/thingI/thingI";
import { moveUntil } from "../data/Grammar/JpGrammar/moveUntil/moveUntil";
import { prohibition } from "../data/Grammar/JpGrammar/prohibition/prohibition";
import { allowed } from "../data/Grammar/JpGrammar/allowed/allowed";
import { noNeed } from "../data/Grammar/JpGrammar/noNeed/noNeed";
import inLocation from "../data/Grammar/JpGrammar/inLocation/inLocation";
import { speakLanguage } from "../data/Grammar/JpGrammar/speakLanguage/speakLanguage";
import { cost } from "../data/Grammar/JpGrammar/cost/cost";
import { AdjNegation } from "../data/Grammar/JpGrammar/Adj/AdjNegation";
import { daysOfMonth } from "../data/Grammar/JpGrammar/calendar/daysOfMonth";
import { years } from "../data/Grammar/JpGrammar/calendar/years";
import { calendar } from "../data/Grammar/JpGrammar/calendar/calendar";
import { become } from "../data/Grammar/JpGrammar/become/become";
import { twoAdjectives } from "../data/Grammar/JpGrammar/twoAdjectives/twoAdjectives";
import { greetings } from "../data/Grammar/JpGrammar/greetings/greetings";
import { verbs2 } from "../data/Grammar/JpGrammar/verbs/verbs";
import { probably } from "../data/Grammar/JpGrammar/probably/probably";
import { whichType } from "../data/Grammar/JpGrammar/whichType/whichType";
import { request } from "../data/Grammar/JpGrammar/request/request";
import { however } from "../data/Grammar/JpGrammar/however/however";
import { so } from "../data/Grammar/JpGrammar/so/so";
import { because } from "../data/Grammar/JpGrammar/because/because";
import { goFor } from "../data/Grammar/JpGrammar/goFor/goFor";
import { something } from "../data/Grammar/JpGrammar/something/something";
import { somewhere } from "../data/Grammar/JpGrammar/somewhere/somewhere";
import { someone } from "../data/Grammar/JpGrammar/someone/someone";
import { anytime } from "../data/Grammar/JpGrammar/anytime/anytime";
import { sometimes } from "../data/Grammar/JpGrammar/sometimes/sometimes";
import { often } from "../data/Grammar/JpGrammar/often/often";
import { usually } from "../data/Grammar/JpGrammar/usually/usually";
import { aLot } from "../data/Grammar/JpGrammar/aLot/aLot";
import { aBit } from "../data/Grammar/JpGrammar/aBit/aBit";
import { notYet } from "../data/Grammar/JpGrammar/notYet/notYet";
import { still } from "../data/Grammar/JpGrammar/still/still";
import { forAMoment } from "../data/Grammar/JpGrammar/forAMoment/forAMoment";
import { already } from "../data/Grammar/JpGrammar/already/already";
import { before } from "../data/Grammar/JpGrammar/before/before";
import { after } from "../data/Grammar/JpGrammar/after/after";
import { Theme } from "../types/Theme.model";
import { tooMuch } from "../data/Grammar/JpGrammar/tooMuch/tooMuch";
import { enter } from "../data/Grammar/JpGrammar/enterLeave/enter";
import { leave } from "../data/Grammar/JpGrammar/enterLeave/leave";
import { walk } from "../data/Grammar/JpGrammar/walk/walk";
import { changeVehicle } from "../data/Grammar/JpGrammar/changeVehicle/changeVehicle";
import { goAnd } from "../data/Grammar/JpGrammar/goAnd/goAnd";
import { bring } from "../data/Grammar/JpGrammar/bring/bring";
import { manyActions } from "../data/Grammar/JpGrammar/manyActions/manyActions";
import { sbSaysThat } from "../data/Grammar/JpGrammar/sbSaysThat/sbSaysThat";
import { wantToDo } from "../data/Grammar/JpGrammar/wantToDo/wantToDo";
import { wantToHave } from "../data/Grammar/JpGrammar/wantToDo/wantToHave";
import { wantToDoNow } from "../data/Grammar/JpGrammar/wantToDo/wantToDoNow";
import { wantToHaveNow } from "../data/Grammar/JpGrammar/wantToDo/wantToHaveNow";
import { beforeTime } from "../data/Grammar/JpGrammar/beforeTime/beforeTime";
import { afterTime } from "../data/Grammar/JpGrammar/afterTime/afterTime";
import { duringTime } from "../data/Grammar/JpGrammar/duringTime/duringTime";
import { hobby } from "../data/Grammar/JpGrammar/hobby/hobby";
import { like } from "../data/Grammar/JpGrammar/like/like";
import { youKnowSb } from "../data/Grammar/JpGrammar/youKnowSb/youKnowSb";
import { youKnowThat } from "../data/Grammar/JpGrammar/youKnowThat/youKnowThat";
import { iDidntKnowSthIsAdj } from "../data/Grammar/JpGrammar/iDidntKnowSthIsAdj/iDidntKnowSthIsAdj";
import { iDidntKnowYouDontLike } from "../data/Grammar/JpGrammar/iDidntKnowYouDontLike/iDidntKnowYouDontLike";
import { borrow } from "../data/Grammar/JpGrammar/borrow/borrow";
import { makeSthMore } from "../data/Grammar/JpGrammar/makeSthMore/makeSthMore";
import { thisMuch } from "../data/Grammar/JpGrammar/thisMuch/thisMuch";
import { onlyThatLittle } from "../data/Grammar/JpGrammar/onlyThatLittle/onlyThatLittle";
import { unfortunatelyIDontSpeak } from "../data/Grammar/JpGrammar/unfortunatelyIDontSpeak/unfortunatelyIDontSpeak";
import GrammarList from "./GrammarList";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [data, setData] = useState<DataType>(days());
  const [theme, setTheme] = useState<Theme>("animals"); //potem podmieniać na przycisku
  const [dataKanji, setDataKanji] = useState<Kanji>(kanjiDict("kwiat"));
  const [showToggleRomaji, setShowToggleRomaji] = useState("show");
  function romajiVisibility() {
    showToggleRomaji === "show"
      ? setShowToggleRomaji("hide")
      : setShowToggleRomaji("show");
  }
  const [showToggleTranslation, setShowToggleTranslation] = useState("show");
  function translationiVisibility() {
    showToggleTranslation === "show"
      ? setShowToggleTranslation("hide")
      : setShowToggleTranslation("show");
  }

  function muzyka(): DataType {
    const pool = [
      { pyt: "Gdzie leżą C", odp: "Na dodatkowej lini na dole oraz na 4 polu" },
      { pyt: "Gdzie leżą D", odp: "Na polu pod pięciolinią oraz na 4 linii" },
      { pyt: "Gdzie leżą E", odp: "Na 1 lini oraz na 4 polu" },
      { pyt: "Gdzie leżą F", odp: "Na 1 polu oraz na 5 linii" },
      { pyt: "Gdzie leżą G", odp: "Na 2 lini oraz na polu nad pięciolinią" },
      {
        pyt: "Gdzie leżą A",
        odp: "Na 2 polu oraz na dodatkowej linii na górze",
      },
      {
        pyt: "Gdzie leżą H",
        odp: "Na 3 lini oraz na polu nad dodatkową linią na górze",
      },
      { pyt: "Co leży na 1 linii?", odp: "e1" },
      { pyt: "Co leży na 2 linii?", odp: "g1" },
      { pyt: "Co leży na 3 linii?", odp: "h1" },
      { pyt: "Co leży na 4 linii?", odp: "d2" },
      { pyt: "Co leży na 5 linii?", odp: "f2" },
      { pyt: "Co leży na dodatkowej dolnej linii?", odp: "c1" },
      { pyt: "Co leży na dodatkowej górnej linii?", odp: "a2" },
      { pyt: "Co leży na 1 polu?", odp: "f1" },
      { pyt: "Co leży na 2 polu?", odp: "a1" },
      { pyt: "Co leży na 3 polu?", odp: "c2" },
      { pyt: "Co leży na 4 polu?", odp: "e2" },
      {
        pyt: "Co leży na polu nad dodatkową kreską nad pięciolinią?",
        odp: "h2",
      },
      { pyt: "Co leży na polu nad pięciolinią?", odp: "g2" },
      { pyt: "Co leży na polu pod pięciolinią?", odp: "d1" },
      { pyt: "Który dźwięk gra klawisz na lewo od dwóch czarnych?", odp: "c" },
      { pyt: "Który dźwięk gra klawisz pomiędzy dwoma czarnymi?", odp: "d" },
      { pyt: "Który dźwięk gra klawisz na prawo od dwóch czarnych?", odp: "e" },
      {
        pyt: "Który dźwięk gra klawisz na prawo od trzech czarnych?",
        odp: "f",
      },
      {
        pyt: "Który dźwięk gra klawisz piewszy pomiędzy trzema czarnymi?",
        odp: "g",
      },
      {
        pyt: "Który dźwięk gra klawisz drugi pomiędzy trzema czarnymi?",
        odp: "a",
      },
      { pyt: "Który dźwięk gra klawisz na lewo od trzech czarnych?", odp: "h" },
    ];

    const x = rand(pool);

    return {
      romaji: x.pyt,
      meaning: x.odp,
    };
  }
  function days(): DataType {
    //this const is recreated every time the function is called so new random values are assigned
    const dayList: Array<DataType> = [
      {
        romaji: "Dono you-ni koko-e kimashitaka",
        meaning: "Jak tu przyszedłeś?",
      },
      { romaji: "Anata-wa dare desu-ka", meaning: "Kim jesteś?" },
      {
        romaji: "Dare-to Nihon-ni ikimasu-ka",
        meaning: "Z kim jedziesz do Japonii?",
      },
      {
        romaji: "Itsu Nihon-ni kimasu-ka",
        meaning: "Kiedy przyjeżdżasz do Japonii?",
      },
      { romaji: "Doko-de kaimashita-ka", meaning: "Gdzie kupiłeś?" },
      { romaji: "Doko-e ikimasu-ka", meaning: "Gdzie idziesz?" },
      { romaji: "Nani-jin desu-ka", meaning: "Jakiej jesteś narodowości?" },
      { romaji: "Nan-jin desu-ka", meaning: "Ile jest osób?" },
      { romaji: "Nan desu-ka", meaning: "Co to jest?" },
      { romaji: "Nan-no hon desu-ka", meaning: "Co to za książka?" },
      { romaji: "Nan-sai", meaning: "Ile lat?" },
      { romaji: "Nan-ban", meaning: "Jaki numer?" },
      {
        romaji: "Jimusho-wa koko, soshite niwa-wa asoko desu.",
        meaning: "Biuro jest tu, a ogród tam dalej.",
      },
      {
        romaji: "Watashi-wa gogo ji-ni nemasu.",
        meaning: "Chodzę spać o 10:00 wieczorem (dosł. po południu).",
      },
      { romaji: "Ashita-no asa hatarakimasu.", meaning: "Jutro rano pracuję." },
      {
        romaji: "Kinou-no ban hatarakimashita.",
        meaning: "Wczoraj wieczór pracowałem.",
      },
      { romaji: "Jisho-wa dore desu-ka.", meaning: "Które to słownik?" },
      {
        romaji: "Ginkou-wa dono tatemono desu-ka.",
        meaning: "Który z tych budynków to bank?",
      },
      {
        romaji: "Gaikoku-go-o benkyou suru koto (no) -wa muzukashii desu.",
        meaning: "Uczenie się języka obcego jest trudne.",
      },
      {
        romaji: "Heya-wa doko desu-ka? Heya-wa soko desu.",
        meaning: "Gdzie jest pokój? Pokój jest tam.",
      },
      {
        romaji: "Aomori to iu ken-o shitte imasu-ka.",
        meaning: "Czy znasz prefekturę zwaną Aomori?",
      },
      {
        romaji: "Aomori to iu ken-ni sunde imasu.",
        meaning: "Mieszkam w prefekturze zwanej Aomori.",
      },
      {
        romaji: "Watashi-wa Nihon-go-de tegami-o kakemasu.",
        meaning: "Piszę list po japońsku.",
      },
      {
        romaji: "Watashi-wa hashi-de gohan-o tabemasu.",
        meaning: "Jem posiłek pałeczkami.",
      },
      {
        romaji: "Watashi-wa Yuriko-san-ni hon-o agemashita.",
        meaning: "Dałem książkę pani Yuriko.",
      },
      {
        romaji: "Watashi-wa Yuriko-san-ni Hihon-go-o oshiemasu.",
        meaning: "Uczę japońskiego panią Yuriko.",
      },
      {
        romaji: "Watashi-wa Tanaka-san-kara (/ni) hon-o moraimashita.",
        meaning: "Dostałem książkę od pana Tanaki.",
      },
      {
        romaji: "Watashi-wa Tanaka-san-kara (/ni) Nihon-go-o naraimasu.",
        meaning: "Uczę się japońskiego od pana Tanaki.",
      },
      { romaji: "Kore-wa ooki-i desu.", meaning: "To jest duże." },
      { romaji: "Kore-wa ooki-kunai desu.", meaning: "To nie jest duże." },
      {
        romaji: "Atsui kuni-to samui kuni.",
        meaning: "Ciepły kraj i zimny kraj.",
      },
      {
        romaji: "Ii hito-to warui hito.",
        meaning: "Dobry człowiek i zły człowiek.",
      },
      {
        romaji: "Kono mise-wa yumei (bez na!) desu.",
        meaning: "Ten sklep jest znany(słynny).",
      },
      {
        romaji: "Kono kuni-wa kirei (bez na!) desu.",
        meaning: "Ten kraj jest piękny.",
      },
      {
        romaji: "Kono kuni-wa kirei (bez na!) dewa arimasen.",
        meaning: "Ten kraj nie jest piękny (w pełni formalnie).",
      },
      {
        romaji: "Kono kuni-wa kirei (bez na!) ja nai desu.",
        meaning: "Ten kraj nie jest piękny (mniej formalnie).",
      },
      {
        romaji: "Koko wa kirei-na basho dewa arimasen.",
        meaning: "To (dosł. tu) nie jest ładne miejsce.",
      },
      {
        romaji: "Koko wa kirei-na kuni desu.",
        meaning: "To (dosł. tu) jest piękny kraj.",
      },
      {
        romaji: "Watashi-wa Nihon-ga suki desu.",
        meaning: "Ja lubię Japonię.",
      },
      {
        romaji: "Watashi-wa Nihon-ga kirai desu.",
        meaning: "Ja nie lubię Japonii.",
      },
      {
        romaji: "Watashi-wa Nihon-go-ga jozu desu.",
        meaning: "Ja jestem dobry w japońskim.",
      },
      {
        romaji: "Watashi-wa Nihon-go-ga heta desu.",
        meaning: "Ja jestem słaby (kiepski) w japońskim.",
      },
      {
        romaji: "Tsukue-no ue-ni hon ga arimasu.",
        meaning: "Na biurku jest książka.",
      },
      {
        romaji: "Uchi-no mae-ni okasan ga imasu.",
        meaning: "Przed domem jest matka.",
      },
      {
        romaji: "Watashi-no ushiro-ni inu ga imasu.",
        meaning: "Za mną jest pies.",
      },
      {
        romaji: "Watashi-no tonari-ni atarashii tango-no hyou ga arimasu.",
        meaning: "Obok mnie jest nowa tabela ze słownictwem.",
      },
      {
        romaji: "Ginkou-to yuubinkyouku-no aida-ni uchi-ga arimasu.",
        meaning: "Między bankiem a pocztą jest dom.",
      },
      //pozdrowienia
      {
        romaji: "Ohayou gozaimasu",
        meaning: "Dzień dobry (przed południem).",
      },

      { romaji: "Nan pun?", meaning: "Ile minut?" },
      { romaji: "Nan kai?", meaning: "Ile pięter?" },

      {
        romaji: "Konnichi-wa",
        meaning: "Dzień dobry (po południu).",
      },
      {
        romaji: "Konban-wa",
        meaning: "Dobry wieczór",
      },
      {
        romaji: "Sayounara",
        meaning: "Do widzenia",
      },
      {
        romaji: "Hajime mashite. Douzo yoroshiku",
        meaning: "Bardzo mi miło Panią/Pana poznać (przy pierwszym spotkaniu)",
      },
      {
        romaji: "Itte kimasu",
        meaning: "Wychodzę (z własnego domu)",
      },
      {
        romaji: "Itterashai",
        meaning: "Uważaj na siebie (osoba pozostająca w domu)",
      },
      {
        romaji: "Tadaimasu",
        meaning: "Już jestem (wracając do swojego domu)",
      },
      {
        romaji: "Okaerinasai",
        meaning:
          "Dobrze, że jesteś (powitanie osoby wracającej do swojego domu)",
      },
      {
        romaji: "Itadakimasu",
        meaning: "Smacznego",
      },
      {
        romaji: "Gochisousama deshita",
        meaning: "Dziękuję (po posiłku)",
      },
      {
        romaji: "Oyasumi nasai",
        meaning: "Dobranoc",
      },
      {
        romaji: "Douzo",
        meaning: "Proszę (dając coś)",
      },
      {
        romaji: "Arigatou (gozaimasu)",
        meaning: "Dziękuję (bardzo)",
      },
      {
        romaji: "(Doumo) sumimasen",
        meaning: "(Bardzo) przepraszam",
      },
      {
        romaji: "Are-wa nan desuka",
        meaning: "Co tam jest",
      },

      ///liczby!!!!
    ];
    return dayList[Math.floor(Math.random() * dayList.length)];
  }

  function changeToCountingLongObjects() {
    setData(countingLongObjects());
  }
  function changeToCountingPeople() {
    setData(countingPeople());
  }
  function changeToAll() {
    setData(days());
  }
  function changeToComparasion() {
    setData(comparasion(theme));
  }
  function changeToMore() {
    setData(more(theme));
  }
  function changeToTheMost() {
    setData(theMost(theme));
  }
  function changeToWhichOf() {
    setData(whichOf(theme));
  }
  function changeToLike() {
    setData(likeDislike(theme));
  }
  function changeToGoodAt() {
    setData(goodBadAt(theme));
  }
  function changeToCan() {
    setData(can(theme));
  }
  function changeToNeedWantHave() {
    setData(needWantHave(theme));
  }
  function changeToDays() {
    setData(daysOfMonth());
  }
  function changeToHurts() {
    setData(hurts(theme));
  }
  function changeToAge() {
    setData(age(theme));
  }
  function changeToGive() {
    setData(give(theme));
  }
  function changeToWantToDo() {
    setData(wantToDo(theme));
  }
  function changeToWantToDoNow() {
    setData(wantToDoNow(theme));
  }
  function changeToWantToHave() {
    setData(wantToHave(theme));
  }
  function changeToWantToHaveNow() {
    setData(wantToHaveNow(theme));
  }
  function changeToReceive() {
    setData(receive(theme));
  }
  function changeToGive2() {
    setData(give2(theme));
  }
  function changeToBasics() {
    setData(basics(theme));
  }
  function changeToWhich() {
    setData(which(theme));
  }
  function changeToWhichOfAny() {
    setData(whichOfAny(theme));
  }
  function changeToMuzyka() {
    setData(muzyka());
  }
  function changeTo2VerbsAtOnce() {
    setData(twoVerbsAtOnce(theme));
  }
  function changeTo2VerbsOneByOne() {
    setData(twoVerbsOneByOne(theme));
  }
  function changeToContinues() {
    setData(continues(theme));
  }
  function changeToWayToDo() {
    setData(wayToDo(theme));
  }
  function changeToAisBchigaimasu() {
    setData(chigaimasu(theme));
  }
  function changeToProposition1() {
    setData(proposition1(theme));
  }
  function changeToProposition2() {
    setData(proposition2(theme));
  }
  function changeToAlso() {
    setData(also(theme));
  }
  function changeToAandB() {
    setData(AandB(theme));
  }
  function changeToGeneralCounting() {
    setData(generalCounting(theme));
  }
  function changeToHours() {
    setData(hours(theme));
  }
  function changeToYears() {
    setData(years());
  }
  function changeToPolite() {
    setData(polite(theme));
  }
  function changeToPrices() {
    setData(prices(theme));
  }
  function changeToGoToWith() {
    setData(goToWith(theme));
  }
  function changeToDoWith() {
    setData(doWith(theme));
  }
  function changeToGenericPronoun() {
    setData(genericPronoun(theme));
  }
  function changeToWhere() {
    setData(where(theme));
  }
  function changeToWithWho() {
    setData(withWho(theme));
  }
  function changeToWhen() {
    setData(when(theme));
  }
  function changeToWhat() {
    setData(what(theme));
  }
  function changeToTellMe() {
    setData(tellMe(theme));
  }
  function changeToYouKnow() {
    setData(youKnow(theme));
  }
  function changeToYouKnowIsAorB() {
    setData(youKnowIsAorB(theme));
  }
  function changeToHowIs() {
    setData(howIs(theme));
  }
  function changeToBut() {
    setData(but(theme));
  }
  function changeToNegativeQuestion() {
    setData(negativeQuestion(theme));
  }
  function changeToSubstantivisator1() {
    setData(substantivisator1(theme));
  }
  function changeToAssuranceVerb() {
    setData(assuranceVerb(theme));
  }
  function changeToAssuranceAdj() {
    setData(assuranceAdj(theme));
  }
  function changeToAssuranceNoun() {
    setData(assuranceNoun(theme));
  }
  function changeToPutOnClothes() {
    setData(putOnClothes(theme));
  }
  function changeToPutOutClothes() {
    setData(putOutClothes(theme));
  }
  function changeToPlacementAndCounting() {
    setData(placementAndCounting(theme));
  }
  function changeToAIsButBIsnt() {
    setData(AIsButBIsnt(theme));
  }
  function changeToACanEtcButBCantEtc() {
    setData(ACanEtcButBCantEtc(theme));
  }
  function changeToADoButBDoesnt() {
    setData(ADoButBDoesnt(theme));
  }
  function changeToIncluding() {
    setData(including(theme));
  }
  function changeToThinkThatNoun() {
    setData(thinkThatNoun(theme));
  }
  function changeToThinkThatNaAdj() {
    setData(thinkThatNaAdj(theme));
  }
  function changeToThinkThatIAdj() {
    setData(thinkThatIAdj(theme));
  }
  function changeToThinkThatVerb() {
    setData(thinkThatVerb(theme));
  }
  function changeToInPlace() {
    setData(inPlace(theme));
  }
  function changeToOr() {
    setData(or(theme));
  }
  function changeToHowTo() {
    setData(howTo(theme));
  }
  function changeToFromTo() {
    setData(fromTo(theme));
  }
  function changeToHaveThingWhich() {
    setData(haveThingWhich(theme));
  }
  function changeToNationality() {
    setData(nationality(theme));
  }
  function changeToThingWhich() {
    setData(thingWhich(theme));
  }
  function changeToSthWhich() {
    setData(sthWhich(theme));
  }
  function changeToThingILikeDislike() {
    setData(thingILikeDislike(theme));
  }
  function changeToMoveUntil() {
    setData(moveUntil(theme));
  }
  function changeToProhibition() {
    setData(prohibition(theme));
  }
  function changeToAllowed() {
    setData(allowed(theme));
  }
  function changeToNoNeed() {
    setData(noNeed(theme));
  }
  function changeToInLocation() {
    setData(inLocation(theme));
  }
  function changeToSpeakLanguage() {
    setData(speakLanguage(theme));
  }
  function changeToCost() {
    setData(cost(theme));
  }
  function changeToAdjNegation() {
    setData(AdjNegation(theme));
  }
  function changeToCalendar() {
    setData(calendar(theme));
  }
  function changeToBecome() {
    setData(become(theme));
  }
  function changeToTwoAdjectives() {
    setData(twoAdjectives(theme));
  }
  function changeToGreetings() {
    setData(greetings(theme));
  }
  function changeToVerbs() {
    setData(verbs2(theme));
  }
  function changeToProbably() {
    setData(probably(theme));
  }
  function changeToWhichType() {
    setData(whichType(theme));
  }
  function changeToRequest() {
    setData(request(theme));
  }
  function changeToHowever() {
    setData(however(theme));
  }
  function changeToSo() {
    setData(so(theme));
  }
  function changeToBecause() {
    setData(because(theme));
  }
  function changeToGoFor() {
    setData(goFor(theme));
  }
  function changeToSomething() {
    setData(something(theme));
  }
  function changeToSomewhere() {
    setData(somewhere(theme));
  }
  function changeToSomeone() {
    setData(someone(theme));
  }
  function changeToSometimes() {
    setData(sometimes(theme));
  }
  function changeToAnytime() {
    setData(anytime(theme));
  }
  function changeToOften() {
    setData(often(theme));
  }
  function changeToUsually() {
    setData(usually(theme));
  }
  function changeToALot() {
    setData(aLot(theme));
  }
  function changeToABit() {
    setData(aBit(theme));
  }
  function changeToNotYet() {
    setData(notYet(theme));
  }
  function changeToStill() {
    setData(still(theme));
  }
  function changeToforAMoment() {
    setData(forAMoment(theme));
  }
  function changeToAlready() {
    setData(already(theme));
  }
  function changeToBefore() {
    setData(before(theme));
  }
  function changeToAfter() {
    setData(after(theme));
  }
  function changeToTooMuch() {
    setData(tooMuch(theme));
  }
  function changeToEnter() {
    setData(enter(theme));
  }
  function changeToExit() {
    setData(leave(theme));
  }
  function changeToWalk() {
    setData(walk(theme));
  }
  function changeToChangeVehicle() {
    setData(changeVehicle(theme));
  }
  function changeToGoAnd() {
    setData(goAnd(theme));
  }
  function changeToBring() {
    setData(bring(theme));
  }
  function changeToManyActions() {
    setData(manyActions(theme));
  }
  function changeToSbSaysThat() {
    setData(sbSaysThat(theme));
  }
  function changeToBeforeTime() {
    setData(beforeTime(theme));
  }
  function changeToAfterTime() {
    setData(afterTime(theme));
  }
  function changeToDuringTime() {
    setData(duringTime(theme));
  }
  function changeToHobby() {
    setData(hobby(theme));
  }
  function changeToLikeF() {
    setData(like(theme));
  }
  function changeToYouKnowSb() {
    setData(youKnowSb(theme));
  }
  function changeToYouKnowThat() {
    setData(youKnowThat(theme));
  }
  function changeToIDidntKnowSthIsAdj() {
    setData(iDidntKnowSthIsAdj(theme));
  }
  function changeToIDidntKnowYouDontLike() {
    setData(iDidntKnowYouDontLike(theme));
  }
  function changeToBorrow() {
    setData(borrow(theme));
  }
  function changeToMakeSthMore() {
    setData(makeSthMore(theme));
  }
  function changeToThisMuch() {
    setData(thisMuch(theme));
  }
  function changeToOnlyThatLittle() {
    setData(onlyThatLittle(theme));
  }
  function changeToUnfortunatelyIDontSpeak() {
    setData(unfortunatelyIDontSpeak(theme));
  }
  function setRandom() {
    const pool = [
      unfortunatelyIDontSpeak(theme),
      makeSthMore(theme),
      thisMuch(theme),
      onlyThatLittle(theme),
      borrow(theme),
      iDidntKnowYouDontLike(theme),
      iDidntKnowSthIsAdj(theme),
      youKnowSb(theme),
      youKnowThat(theme),
      like(theme),
      hobby(theme),
      duringTime(theme),
      afterTime(theme),
      sbSaysThat(theme),
      manyActions(theme),
      bring(theme),
      goAnd(theme),
      changeVehicle(theme),
      walk(theme),
      leave(theme),
      enter(theme),
      tooMuch(theme),
      after(theme),
      before(theme),
      sometimes(theme),
      often(theme),
      aLot(theme),
      aBit(theme),
      notYet(theme),
      forAMoment(theme),
      still(theme),
      already(theme),
      anytime(theme),
      someone(theme),
      something(theme),
      somewhere(theme),
      goFor(theme),
      because(theme),
      so(theme),
      however(theme),
      request(theme),
      whichType(theme),
      probably(theme),
      verbs2(theme),
      greetings(theme),
      twoAdjectives(theme),
      become(theme),
      calendar(theme),
      AdjNegation(theme),
      cost(theme),
      speakLanguage(theme),
      inLocation(theme),
      noNeed(theme),
      allowed(theme),
      prohibition(theme),
      moveUntil(theme),
      thingILikeDislike(theme),
      sthWhich(theme),
      thingWhich(theme),
      nationality(theme),
      haveThingWhich(theme),
      fromTo(theme),
      howTo(theme),
      or(theme),
      inPlace(theme),
      thinkThatNoun(theme),
      thinkThatVerb(theme),
      thinkThatIAdj(theme),
      thinkThatNaAdj(theme),
      including(theme),
      ADoButBDoesnt(theme),
      ACanEtcButBCantEtc(theme),
      AIsButBIsnt(theme),
      placementAndCounting(theme),
      putOnClothes(theme),
      putOutClothes(theme),
      assuranceAdj(theme),
      assuranceNoun(theme),
      assuranceVerb(theme),
      substantivisator1(theme),
      negativeQuestion(theme),
      but(theme),
      howIs(theme),
      youKnow(theme),
      youKnowIsAorB(theme),
      tellMe(theme),
      when(theme),
      withWho(theme),
      where(theme),
      what(theme),
      genericPronoun(theme),
      //doWith(theme),//bo jest bug
      goToWith(theme),
      prices(theme),
      years(),
      polite(theme),
      hours(theme),
      daysOfMonth(),
      generalCounting(theme),
      proposition1(theme),
      proposition2(theme),
      chigaimasu(theme),
      continues(theme),
      wayToDo(theme),
      twoVerbsAtOnce(theme),
      twoVerbsOneByOne(theme),
      which(theme),
      whichOfAny(theme),
      //basics(theme),  //bo jest bug
      give2(theme),
      receive(theme),
      wantToDo(theme),
     // countingAnimals(),
      countingLongObjects(),
      countingPeople(),
      comparasion(theme),
      more(theme),
      theMost(theme),
      whichOf(theme),
      likeDislike(theme),
      goodBadAt(theme),
      can(theme),
      needWantHave(theme),
      days(),
      hurts(theme),
      age(theme),
      give(theme),
    ];

    console.log(pool);
    setData(rand(pool));
  }

  function changeToKanji() {
    const kanjiSet = ["kwiat", "pszczoła", "miód"];
    const i = Math.floor(Math.random() * kanjiSet.length);
    //console.log(kanjiDict(kanjiSet[i]));
    setDataKanji(kanjiDict(kanjiSet[i]));
  }
  return (
    <div className="container">
      
      <IonButton onClick={changeToKanji}>Kanji</IonButton>
      <IonButton onClick={changeToCountingLongObjects}>LongObjects</IonButton>
      <IonButton onClick={changeToCountingPeople}>People</IonButton>
      <IonButton onClick={changeToComparasion}>Comparasion</IonButton>
      <IonButton onClick={changeToMore}>More</IonButton>
      <IonButton onClick={changeToTheMost}>the Most</IonButton>
      <IonButton onClick={changeToWhichOf}>which of</IonButton>
      <IonButton onClick={changeToLike}>like</IonButton>
      <IonButton onClick={changeToGoodAt}>good at</IonButton>
      <IonButton onClick={changeToCan}>can</IonButton>
      <IonButton onClick={changeToDays}>days</IonButton>
      <IonButton onClick={changeToHurts}>hurts</IonButton>
      <IonButton onClick={changeToNeedWantHave}> need want have</IonButton>
      <IonButton onClick={changeToAge}> Age</IonButton>
      <IonButton onClick={changeToWantToDo}> want to do</IonButton>
      <IonButton onClick={changeToGive}> give teach</IonButton>
      <IonButton onClick={changeToReceive}>receive</IonButton>
      <IonButton onClick={changeToGive2}>give2</IonButton>
      <IonButton onClick={changeToAll}>All</IonButton>
      <IonButton onClick={changeToReceive}>Receive</IonButton>
      <IonButton onClick={changeToBasics}>Basics</IonButton>
      <IonButton onClick={changeToWhich}>which</IonButton>
      <IonButton onClick={changeToWhichOfAny}>which of any</IonButton>
      <IonButton onClick={changeTo2VerbsAtOnce}>2 verbs at once</IonButton>
      <IonButton onClick={changeTo2VerbsOneByOne}>2 verbs one by one</IonButton>
      <IonButton onClick={changeToContinues}>continues</IonButton>
      <IonButton onClick={changeToWayToDo}>way to do</IonButton>
      <IonButton onClick={changeToAisBchigaimasu}>A is B right/wrong</IonButton>
      <IonButton onClick={changeToProposition1}>proposition 1</IonButton>
      <IonButton onClick={changeToProposition2}>proposition 2</IonButton>
      <IonButton onClick={changeToAlso}>also</IonButton>
      <IonButton onClick={changeToAandB}>A and B</IonButton>
      <IonButton onClick={changeToGeneralCounting}>general counting</IonButton>
      <IonButton onClick={changeToHours}>hours</IonButton>
      <IonButton onClick={changeToYears}>years</IonButton>
      <IonButton onClick={changeToPolite}>polite</IonButton>
      <IonButton onClick={changeToPrices}>prices</IonButton>
      <IonButton onClick={changeToGoToWith}>go to with</IonButton>
      <IonButton onClick={changeToDoWith}>do with</IonButton>
      <IonButton onClick={changeToWhat}>what</IonButton>
      <IonButton onClick={changeToWhen}>when</IonButton>
      <IonButton onClick={changeToWithWho}>with who</IonButton>
      <IonButton onClick={changeToWhere}>where</IonButton>
      <IonButton onClick={changeToYouKnow}>y'know</IonButton>
      <IonButton onClick={changeToYouKnowIsAorB}>y'know is A or B</IonButton>
      <IonButton onClick={changeToTellMe}>tell me</IonButton>
      <IonButton onClick={changeToGenericPronoun}>generic pronoun</IonButton>
      <IonButton onClick={changeToHowIs}>how is</IonButton>
      <IonButton onClick={changeToBut}>but</IonButton>
      <IonButton onClick={changeToAssuranceAdj}>as.adj</IonButton>
      <IonButton onClick={changeToAssuranceNoun}>as.n</IonButton>
      <IonButton onClick={changeToAssuranceVerb}>as.v</IonButton>
      <IonButton onClick={changeToNegativeQuestion}>negativeQuestion</IonButton>
      <IonButton onClick={changeToSubstantivisator1}>substantivisator1</IonButton>
      <IonButton onClick={changeToPutOnClothes}>put on clothes</IonButton>
      <IonButton onClick={changeToPutOutClothes}>put out clothes</IonButton>
      <IonButton onClick={changeToPlacementAndCounting}>placement and counting</IonButton>
      <IonButton onClick={changeToAIsButBIsnt}>A is but B isnt</IonButton>
      <IonButton onClick={changeToACanEtcButBCantEtc}>A can but B cant</IonButton>
      <IonButton onClick={changeToADoButBDoesnt}>A do but B doesnt</IonButton>
      <IonButton onClick={changeToIncluding}>including</IonButton>
      <IonButton onClick={changeToThinkThatNoun}>think that n</IonButton>
      <IonButton onClick={changeToThinkThatVerb}>think that v</IonButton>
      <IonButton onClick={changeToThinkThatIAdj}>think that -i</IonButton>
      <IonButton onClick={changeToThinkThatNaAdj}>think that -na</IonButton>
      <IonButton onClick={changeToInPlace}>in place</IonButton>
      <IonButton onClick={changeToOr}>or</IonButton>
      <IonButton onClick={changeToHowTo}>how to</IonButton>
      <IonButton onClick={changeToFromTo}>from to</IonButton>
      <IonButton onClick={changeToHaveThingWhich}>have thing which</IonButton>
      <IonButton onClick={changeToNationality}>nationality</IonButton>
      <IonButton onClick={changeToThingWhich}>thing which</IonButton>
      <IonButton onClick={changeToSthWhich}>sth which</IonButton>
      <IonButton onClick={changeToThingILikeDislike}>thing I</IonButton>
      <IonButton onClick={changeToMoveUntil}>move until</IonButton>
      <IonButton onClick={changeToProhibition}>prohibition</IonButton>
      <IonButton onClick={changeToAllowed}>allowed</IonButton>
      <IonButton onClick={changeToNoNeed}>no need</IonButton>
      <IonButton onClick={changeToInLocation}>in location</IonButton>
      <IonButton onClick={changeToSpeakLanguage}>speak language</IonButton>
      <IonButton onClick={changeToCost}>cost</IonButton>
      <IonButton onClick={changeToAdjNegation}>adj negation</IonButton>
      <IonButton onClick={changeToCalendar}>calendar</IonButton>
      <IonButton onClick={changeToBecome}>become</IonButton>
      <IonButton onClick={changeToTwoAdjectives}>2 adj</IonButton>
      <IonButton onClick={changeToGreetings}>greetings</IonButton>
      <IonButton onClick={changeToVerbs}>verbs</IonButton>
      <IonButton onClick={changeToProbably}>probably</IonButton>
      <IonButton onClick={changeToWhichType}>which type</IonButton>
      <IonButton onClick={changeToRequest}>request</IonButton>
      <IonButton onClick={changeToHowever}>however</IonButton>
      <IonButton onClick={changeToSo}>so</IonButton>
      <IonButton onClick={changeToGoFor}>go for</IonButton>
      <IonButton onClick={changeToBecause}>because</IonButton>
      <IonButton onClick={changeToSomeone}>someone</IonButton>
      <IonButton onClick={changeToSomething}>something</IonButton>
      <IonButton onClick={changeToSomewhere}>somewhere</IonButton>
      <IonButton onClick={changeToAnytime}>anytime</IonButton>
      <IonButton onClick={changeToNotYet}>not yet</IonButton>
      <IonButton onClick={changeToStill}>still</IonButton>
      <IonButton onClick={changeToSometimes}>sometimes</IonButton>
      <IonButton onClick={changeToOften}>often</IonButton>
      <IonButton onClick={changeToUsually}>usually</IonButton>
      <IonButton onClick={changeToALot}>a lot</IonButton>
      <IonButton onClick={changeToABit}>a bit</IonButton>
      <IonButton onClick={changeToforAMoment}>for a moment</IonButton>
      <IonButton onClick={changeToAlready}>already</IonButton>
      <IonButton onClick={changeToBefore}>before</IonButton>
      <IonButton onClick={changeToAfter}>after</IonButton>
      <IonButton onClick={changeToTooMuch}>too much</IonButton>
      <IonButton onClick={changeToEnter}>enter</IonButton>
      <IonButton onClick={changeToExit}>exit</IonButton>
      <IonButton onClick={changeToWalk}>walk</IonButton>
      <IonButton onClick={changeToChangeVehicle}>change vehicle</IonButton>
      <IonButton onClick={changeToGoAnd}>go and</IonButton>
      <IonButton onClick={changeToBring}>bring</IonButton>
      <IonButton onClick={changeToManyActions}>many actions</IonButton>
      <IonButton onClick={changeToSbSaysThat}>sb says that</IonButton>
      <IonButton onClick={changeToWantToDo}>want to do</IonButton>
      <IonButton onClick={changeToWantToDoNow}>want to do now</IonButton>
      <IonButton onClick={changeToWantToHave}>want to have</IonButton>
      <IonButton onClick={changeToWantToHaveNow}>want to have now</IonButton>
      <IonButton onClick={changeToBeforeTime}>before time</IonButton>
      <IonButton onClick={changeToAfterTime}>after time</IonButton>
      <IonButton onClick={changeToDuringTime}>during time</IonButton>
      <IonButton onClick={changeToHobby}>hobby</IonButton>
      <IonButton onClick={changeToLikeF}>likeF</IonButton>
      <IonButton onClick={changeToYouKnowSb}>you know sb</IonButton>
      <IonButton onClick={changeToYouKnowThat}>you know that</IonButton>
      <IonButton onClick={changeToIDidntKnowSthIsAdj}>didnt know sth is x</IonButton>
      <IonButton onClick={changeToIDidntKnowYouDontLike}>didnt know you dont like</IonButton>
      <IonButton onClick={changeToBorrow}>borrow</IonButton>
      <IonButton onClick={changeToOnlyThatLittle}>only that little</IonButton>
      <IonButton onClick={changeToThisMuch}>this much</IonButton>
      <IonButton onClick={changeToMakeSthMore}>make sth more</IonButton>
      <IonButton onClick={changeToUnfortunatelyIDontSpeak}>unfortunately I dont speak</IonButton>
      <IonButton onClick={changeToMuzyka}>==Muzyka==</IonButton>
      <IonButton onClick={setRandom}>Random</IonButton>

      <p></p>

      <p></p>
      <p></p>

      {showToggleRomaji === "hide" ? (
        <strong>{data.romaji + " || " + data.kanji || "-"}</strong>
      ) : (
        <strong>?</strong>
      )}
      <IonButton onClick={romajiVisibility}>{showToggleRomaji}</IonButton>
      <p></p>

      {showToggleTranslation === "hide" ? (
        <strong>{data.meaning}</strong>
      ) : (
        <strong>?</strong>
      )}
      <IonButton onClick={translationiVisibility}>
        {showToggleTranslation}
      </IonButton>
      <p></p>
     
     
      <GrammarList/>
    </div>
  );
};

export default ExploreContainer;
