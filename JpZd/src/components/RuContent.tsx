import React from 'react'
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

export default function RuContent() {
    type Modes = "settings" | "questions";
    const [showSettingsQuestions, setShowSettingsQuestions] = useState<Modes>("settings");
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
        <IonItem>
        <IonButton onClick={settingsQuestions} className="zindex">
          {showSettingsQuestions}
        </IonButton>
        </IonItem>
        <IonItem>
          {showSettingsQuestions === "questions" ? (
            <JpSettings />
          ) : (
            <JpQuestions />
          )}
        </IonItem>
      </IonCardContent>
    </IonCard>

  )
}
