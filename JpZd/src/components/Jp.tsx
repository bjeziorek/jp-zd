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
  wantToDo,
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

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [data, setData] = useState<DataType>(days());
  const [theme, setTheme] = useState<string>("animals"); //potem podmieniać na przycisku
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
  function setRandom() {
    const pool = [
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
      doWith(theme),
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
      basics(theme),
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
      <IonButton onClick={changeToMuzyka}>==Muzyka==</IonButton>
      <IonButton onClick={setRandom}>Random</IonButton>

      <p></p>

      <p></p>
      <p>
        kanji: {dataKanji.kanji} {dataKanji.meaning.pl}
      </p>
      <p></p>
      <p></p>

      {showToggleRomaji === "hide" ? (
        <strong>{data.romaji + " || " + data.kanji || "-"}</strong>
      ) : (
        <strong>?</strong>
      )}
      <p></p>
      <IonButton onClick={romajiVisibility}>{showToggleRomaji}</IonButton>
      <p></p>

      {showToggleTranslation === "hide" ? (
        <strong>{data.meaning}</strong>
      ) : (
        <strong>?</strong>
      )}
      <p></p>
      <IonButton onClick={translationiVisibility}>
        {showToggleTranslation}
      </IonButton>
      <p></p>
      <strong>{name}</strong>
      <p>
        xxx Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
