import Firebase from 'firebase/app';
import 'Firebase/Firebase-auth';
import 'Firebase/Firebase-firestore';
import FirebaseConfig from './FirebaseConfig';


const firebaseApp=  Firebase.initializeApp(FirebaseConfig);
const db = firebaseApp.firestore();