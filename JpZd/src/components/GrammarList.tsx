import { IonCheckbox, IonChip } from '@ionic/react'
import React from 'react'
import { nouns } from '../data/dictionary'

export default function GrammarList() {
    
  return (
    <div>
        <span>GrammarList</span>
    {nouns.animals.map(v=><p><IonChip><IonCheckbox />{v.jp}</IonChip></p>)}
    </div>
  )
}
