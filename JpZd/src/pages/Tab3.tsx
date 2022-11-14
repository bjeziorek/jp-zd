import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Ru from '../components/Ru';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
     
      <IonContent >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Ru name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
