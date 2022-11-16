import { IonButton, IonCheckbox, IonTitle } from '@ionic/react'
import React, { useState } from 'react'
import { AdjectiveStructure } from '../types/Adjective.model';
import { NounStructure } from '../types/Noun.model';
import { TimeStructure } from '../types/Tense.model';
import { VerbStructure } from '../types/Verb.model';

interface ContainerProps {
    subData: VerbStructure[]|NounStructure[]|TimeStructure[]|AdjectiveStructure[];
    grammar:string
  }
const ContentList: React.FC<ContainerProps> = ({ grammar,subData }) => {
   console.log('aaa',subData)
   const a=subData.map(
    (item:any,index:number)=>{
      console.log(item)
      const pl=(grammar==='nouns')?item.pl.M:item.pl
    return(
    <div key={index}><IonCheckbox/>
    <span>{
      (grammar==='verbs')
      ?item.jp.dictionaryForm+' - '+item.pl.infinitive
      :item.jp+' - '+pl
    }
    </span>
    </div>)
   })
   
    const b=<p>test</p>
   return(
        <div>
           {a} 
           </div>
    )
}

export default  ContentList
