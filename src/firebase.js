import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAgtWlIbAfv8TqDgHoZJNb3ykxRdR9JhFM",
    authDomain: "jokely-app-77546.firebaseapp.com",
    projectId: "jokely-app-77546",
    storageBucket: "jokely-app-77546.appspot.com",
    messagingSenderId: "331421395060",
    appId: "1:331421395060:web:368d01cb36e02411964921"
  };

  const app = initializeApp(firebaseConfig);

  export default app;