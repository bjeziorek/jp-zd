import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
} from "@ionic/react";
import { useState } from "react";
import JpQuestions from "./JpQuestions";
import JpSettings from "./JpSettings";
import "./Ru.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  type Modes = "settings" | "questions";
  const [showSettingsQuestions, setShowSettingsQuestions] =
    useState<Modes>("settings");
  function settingsQuestions() {
    showSettingsQuestions === "settings"
      ? setShowSettingsQuestions("questions")
      : setShowSettingsQuestions("settings");
  }

  return (
    <IonCard className="container">
      <IonCardHeader>
        <IonCardTitle>Settings</IonCardTitle>
        <IonCardSubtitle>Here is contenet rendered:</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonButton onClick={settingsQuestions}>
          {showSettingsQuestions}
        </IonButton>

        {showSettingsQuestions === "questions" ? (
          <JpSettings />
        ) : (
          <JpQuestions />
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default ExploreContainer;
