import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Jp from '../components/Jp';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Jp name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
