import { IonButton } from "@ionic/react";
import { useState } from "react";
import "./Ua.css";
import { cases, thisIs, UaType } from "../data/Grammar/UaGrammar/thisIs";
import Kanji from "../types/Kanji.model";
import { kanjiDict } from "../data/dictionary";
import rand from "../utils/randomArrayElement";
import { practiceVerbs } from "../data/Grammar/UaGrammar/verbs";

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
  function changeToPracticeVerbs() {
    setData(practiceVerbs());
  }
  
  function setRandom() {
    const pool = [
      practiceVerbs(),
      thisIs(theme),
    ];

    console.log(pool);
    setData(rand(pool));
  }

  
  return (
    <div className="container">
      <p>ua !!!!!!!!!!</p>
      <IonButton onClick={changeToThisIs}>this is</IonButton>
      <IonButton onClick={changeToPracticeVerbs}>verbs</IonButton>
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
