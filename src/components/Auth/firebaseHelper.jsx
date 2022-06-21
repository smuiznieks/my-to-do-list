import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD12U6gGxkX7q_SDJMOVTmyjf3oHJgpn2I",
  authDomain: "emeritus-cd19d.firebaseapp.com",
  databaseURL: "https://emeritus-cd19d-default-rtdb.firebaseio.com",
  projectId: "emeritus-cd19d",
  storageBucket: "emeritus-cd19d.appspot.com",
  messagingSenderId: "79336576676",
  appId: "1:79336576676:web:61344dce20ae202036b831",
};

initializeApp(firebaseConfig);
const db = getDatabase();

export default db;
