import { IonAccordion, IonAccordionGroup, IonCheckbox, IonChip, IonItem, IonLabel } from "@ionic/react";
import React, { FormEvent, FormEventHandler } from "react";
import { nouns } from "../data/dictionary";
import { getKeyList } from "../UaUtils/getKeyList";

export default function GrammarList() {

    const checkBoxStates=[]
  //  const [checkBoxes,setCheckBoxes]=setState([])

    function changeCheckBoxState(event: FormEvent){
        console.log('check box changed to: ',
        ((event as FormEvent).target as HTMLIonCheckboxElement).parentElement?.children[1].firstChild?.nodeValue,
        ((event as FormEvent).target as HTMLIonCheckboxElement).checked
        
        )
    }

  const a = getKeyList(nouns).map((k) => {
    return (
      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>Nouns: {k}</IonLabel>
          </IonItem>
          {nouns[k].map((v) => (
            <div className="ion-padding" slot="content">
              <IonCheckbox onClick={changeCheckBoxState} />
              <span>{v.jp}</span>
            </div>
          ))}
        </IonAccordion>
      </IonAccordionGroup>
    );
  });
  const b = nouns.animals.map((v) => (
    <p>
      <IonChip>
        <IonCheckbox />
        {v.jp}
      </IonChip>
    </p>
  ));

  return (
    <div>
      <span>GrammarList</span>
      {a}
    </div>
  );
}
