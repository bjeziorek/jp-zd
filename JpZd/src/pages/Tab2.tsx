import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Ua from '../components/Ua';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ua</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Ua name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
