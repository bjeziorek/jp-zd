import { TimeStructure } from './../types/Tense.model';
import { AdjectiveStructure } from './../types/Adjective.model';
import { adjectives, verbs, time } from './../data/dictionary';
import { VerbStructure } from './../types/Verb.model';
import { NounStructure } from './../types/Noun.model';
import { Theme } from './../types/Theme.model'
import { nouns } from "../data/dictionary"
import { Time } from '../types/Time.model';

export function pickTheme(grammarElement:'a'|'n'|'v'|'t',theme:Theme):
NounStructure[]|VerbStructure[]|AdjectiveStructure[]|TimeStructure[]|any[]
{
    
        switch(grammarElement){
            case 'a': 
            if(typeof theme==='string'){
                return adjectives[theme]
            }else{
                
                let arr:AdjectiveStructure[]=[]
                theme.forEach(element => {
                    arr=arr.concat(adjectives[element])
                })
                return arr
            }
                   
          case 'n': 
            if(typeof theme==='string'){
                return nouns[theme]
            }else{
                let arr:Array<NounStructure>=[]
                theme.forEach(element => {
                    arr=arr.concat(nouns[element])
                })
                return arr
            }
                    
            case 'v': 
            if(typeof theme==='string'){
                return verbs[theme]
            }else{
                let arr: VerbStructure[]=[]
                theme.forEach(element => {
                    arr=arr.concat(verbs[element])
                })
                return arr
            }
           
             case 't':
            if(typeof theme==='string'){
                return time[theme]
            }else{
                let arr:any[]=[]
                theme.forEach(element => {
                    arr=arr.concat(time[element])
                })
                return arr
            }
           
        }
    
    
}
