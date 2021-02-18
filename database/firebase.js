import firebase from 'firebase';

import 'firebase/firestore';

const firebaseConfig = {
// Suas informações, de configurações disponibilizadas pelo Firebase, aqui.
};

firebase.initializeApp(firebaseConfig);

export default firebase;