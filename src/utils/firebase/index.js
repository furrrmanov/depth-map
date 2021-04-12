import firebase from 'firebase'
import 'firebase/auth'

import { store } from 'redux/store'
import { setCharts } from 'actions'
import { transformDataList } from '../dataMappers'

const firebaseConfig = {
  apiKey: 'AIzaSyDhoVQJlKNSpOeguhF6U1_-4xInd6pnUZ4',
  authDomain: 'depth-map-1b768.firebaseapp.com',
  databaseURL: 'https://depth-map-1b768-default-rtdb.firebaseio.com',
  projectId: 'depth-map-1b768',
  storageBucket: 'depth-map-1b768.appspot.com',
  messagingSenderId: '20959886740',
  appId: '1:20959886740:web:512821a4cadd5127062381',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export const database = firebase.database()
export default firebase

export const sendDataInFirebaseDb = (data) => {
  return database.ref(`${data.root}`).push(data.value)
}

export const getDataInFirebaseDb = ({ root }) => {
  return database.ref(`${root}`).on('value', (snapshot) => {
    const data = snapshot.val()
    store.dispatch(setCharts(transformDataList(Object.entries(data))))
  })
}

export const deleteEntityInCollection = (value) => {
  return database.ref(value.collectionName).once('value', (snpsht) => {
    snpsht.forEach((dp) => {
      database.ref(`${value.collectionRoot}${value.id}`).remove()
    })
  })
}
