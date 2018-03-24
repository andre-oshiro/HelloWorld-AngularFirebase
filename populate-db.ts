import { database, initializeApp } from 'firebase';
import { firebaseConfig } from './src/environments/firebase.config';
import { dbData } from './db-data';

initializeApp(firebaseConfig);

const testDataRef = database().ref('testData');

dbData.testData.forEach( data => {
    const dataRef = testDataRef.push({
        name: data.name,
        type: data.type,
        body: data.body
    });
});


