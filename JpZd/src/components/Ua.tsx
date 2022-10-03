import { IonButton } from "@ionic/react";
import { useState } from "react";
import DataType from "../types/DataType.model";
import "./Ua.css";
import {
  age,
  countingAnimals_deprecated as countingAnimals,
  countingLongObjects,
  countingPeople,
  generalCounting,
} from "../data/numbers";
import { kanjiDict } from "../data/dictionary";
import { comparasion, more, theMost, whichOf } from "../data/comparasionSizes";
import Kanji from "../types/Kanji.model";
import { can, goodBadAt, likeDislike, needWantHave } from "../data/gaParticle";
import { daysOfMonth, hours, years } from "../data/calendar";
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
} from "../data/actions";
import { chigaimasu, basics, which, whichOfAny, polite } from "../data/basics";
import { cases, thisIs, UaType } from "../data/Grammar/UaGrammar/thisIs";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [data, setData] = useState<UaType>(thisIs(''));
  const [theme, setTheme] = useState<string>("professions"); //potem podmieniać na przycisku
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
  
  function changeToThisIs() {
    setData(thisIs(theme))
  }
  function changeToCases() {
    setData(cases(theme));
  }
  
  function setRandom() {
    const pool = [
      cases(theme),
      thisIs(theme),
    ];

    console.log(pool);
    setData(rand(pool));
  }

  
  return (
    <div className="container">
      <p>ua !!!!!!!!!!</p>
      <IonButton onClick={changeToThisIs}>this is</IonButton>
      <IonButton onClick={changeToCases}>cases</IonButton>
      <IonButton onClick={setRandom}>Random</IonButton>

      <p></p>

      <p></p>
      <p>
        kanji: {dataKanji.kanji} {dataKanji.meaning.pl}
      </p>
      <p></p>
      <p></p>

      {showToggleRomaji === "hide" ? (
        <strong>{data.uaLatin + " || " + data.uaCyrylic}</strong>
      ) : (
        <strong>?</strong>
      )}
      <p></p>
      <IonButton onClick={romajiVisibility}>{showToggleRomaji}</IonButton>
      <p></p>

      {showToggleTranslation === "hide" ? (
        <strong>{data.plLatin+ ' || '+data.plCyrylic}</strong>
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
