import {
  IonAccordion,
  IonAccordionGroup,
  IonCheckbox,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { FormEvent, useState } from "react";
import { nouns } from "../data/dictionary";

export default function GrammarList() {
  const [checkboxes, setCheckboxes] = useState(initCheckboxes);
  console.log("checkboxes", checkboxes);
  console.log("Object.keys(obj)", Object.keys(nouns));

  interface I {
    [key: string]:
      | string
      | boolean
      | {
          subName: string;
          subValue: boolean;
        }[];
  }

  function initCheckboxes(): Array<I> {
    //jeśli nie ma zapisu w localstrorage tu null-uj:
    return Object.keys(nouns).map((category) => {
      return {
        name: category,
        value: false,
        subvalues: nouns[category].map((sc) => {
          return {
            subName: sc.jp,
            subValue: false,
          };
        }),
      };
    });
  }

  function changeCheckboxState(event: FormEvent) {
    //const name: string = ((event as FormEvent).target as HTMLIonCheckboxElement)
      //.parentElement?.children[1].firstChild?.nodeValue as string;
    const data = ((event as FormEvent).target as HTMLIonCheckboxElement)
      .dataset;
    const t = checkboxes;
    const category = data.category ? data.category : "animals";
    const value = data.value ? data.value : "neko";
    const result = (
      t.filter((item) => item.name === category)[0].subvalues as Array<{
        subName: string;
        subValue: boolean;
      }>
    ).filter(
      (item2: { subName: string; subValue: boolean }) => item2.subName === value
    )[0].subValue;
    (
      t.filter((item) => item.name === category)[0].subvalues as Array<{
        subName: string;
        subValue: boolean;
      }>
    ).filter(
      (item2: { subName: string; subValue: boolean }) => item2.subName === value
    )[0].subValue = !result;
    setCheckboxes(t);
  }

  const a = Object.keys(nouns).map((k) => {
    return (
      <IonAccordionGroup>
        <IonAccordion value="first" key={k}>
          <IonItem slot="header" color="light">
            <IonCheckbox />
            <IonLabel>Nouns: {k}</IonLabel>
          </IonItem>
          {nouns[k].map((v, i) => (
            <div
              className="ion-padding"
              slot="content"
              key={v.jp + "-" + k}
            >
              <IonCheckbox
                data-category={k}
                data-value={v.jp}
                onClick={changeCheckboxState}
              />
              <span>
                {v.jp} - {v.pl.M}
              </span>
            </div>
          ))}
        </IonAccordion>
      </IonAccordionGroup>
    );
  });

  return (
    <div>
      <span>GrammarList</span>
      {a}
      {' tu ma byc "a"'}
    </div>
  );
}
