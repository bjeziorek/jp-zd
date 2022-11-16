import { IonButton } from '@ionic/react';
import React, { useState } from 'react'
import { adjectives, nouns, time, verbs } from '../data/dictionary';
import Adjective from '../types/Adjective.model';
import Noun from '../types/Noun.model';
import { Time } from '../types/Time.model';
import Verb from '../types/Verb.model';
import VerbModel from '../types/Verb.model';
import ContentList from './ContentList';
import ContentListContainer from './ContentListContainer';

interface ContainerProps {
    triggeredBy: string;
  }

const ContentCategory:React.FC<ContainerProps>=({triggeredBy}) =>{
    type CategoryPool='verbs'|'nouns'|'adjectives'|'time'
    type GrammarPool=Verb|Noun|Adjective|Time
    const [grammarCategory,setGrammarCategory]=useState<CategoryPool>('nouns')
    const [data,setData]=useState<GrammarPool>(nouns)
    function set(grammar: CategoryPool ,data: GrammarPool){
        setGrammarCategory(grammar)
        setData(data)
        console.log('set',data,grammar)
    }
  return (
    <div>
        <p>triggered by: {triggeredBy}</p>
        <IonButton onClick={()=>set('verbs',verbs)}>Verbs</IonButton>
        <IonButton onClick={()=>set('nouns',nouns)}>Nouns</IonButton>
        <IonButton onClick={()=>set('adjectives',adjectives)}>Adjectives</IonButton>
        <IonButton onClick={()=>set('time',time)}>Time</IonButton>
        <ContentListContainer grammar={grammarCategory} data={data}/>
    </div>
  )
}
export default ContentCategory