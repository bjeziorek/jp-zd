import { IonButton, IonCard } from '@ionic/react';
import React from 'react'

function days(){
    const dayList = [
        {romaji:"tsuitachi"},
        {romaji:"futsu-ka"},
        {romaji:"mik-ka"},
        {romaji:"yok-ka"},
        {romaji:"itsu-ka"},
        {romaji:"mui-ka"},
        
    ]
    return dayList[Math.floor(Math.random()*dayList.length)];
}

let x = [
    "Kyo-wa nan-gatsu nan-nichi desu-ka",
    "Kyo-wa shi-gatsu ni-jyu-ku-nichi desu",
    "Anata-no tanjyobi-wa itsu desu-ka"
]

export default function Data() {
  return (
    <div>
        <IonButton>Losuj zdanie</IonButton>
        <IonCard>
            <p>test</p>
        </IonCard>
    </div>
  )
}
