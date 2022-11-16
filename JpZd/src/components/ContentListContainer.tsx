import { IonButton, IonTitle } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { nouns } from '../data/dictionary';
import Adjective, { AdjectiveStructure } from '../types/Adjective.model';
import Noun, { NounStructure } from '../types/Noun.model';
import { TimeStructure } from '../types/Tense.model';
import { Time } from '../types/Time.model';
import Verb, { VerbStructure } from '../types/Verb.model';
import ContentList from './ContentList';

interface ContainerProps {
    grammar: string;
    data:Verb|Noun|Adjective|Time
  }
const ContentListComponent: React.FC<ContainerProps> = ({ grammar,data }) => {
    
    const categories=Object.keys(data)
    const [index,setIndex]=useState(0)
    const [category,setCategory]=useState(categories[index])
    useEffect(()=>{
        setCategory(categories[index])
    }, [categories, index])


    function nextOne(){
        let i = categories.indexOf(category)
        if(i>=categories.length-1){
            i=0
        }else{
            i++
        }
        setIndex(i)
        setCategory(categories[index])
    }
    
    function prevOne(){
        let i = categories.indexOf(category)
        if(index<=0){
            i=categories.length-1
        }else{
            i--
        }
        setIndex(i)
        setCategory(categories[index])
    }


    //type G=NounStructure|VerbStructure|AdjectiveStructure|TimeStructure
    console.log(categories,category,data,data[category],data[0], categories.indexOf(category))
    return(
        <div>
            <IonTitle key={category}>{grammar}: {category}</IonTitle>
            <IonButton onClick={prevOne}>prev</IonButton>
            <IonButton onClick={nextOne}>next</IonButton>
            <ContentList grammar={grammar} subData={data[category]||nouns.animals}/>
        </div>
    )
}

export default  ContentListComponent
