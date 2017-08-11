import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDIVxg6k6hpwIAUl2NIK9eGONpKDLK4-EU",
  authDomain: "shih-test-project.firebaseapp.com",
  databaseURL: "https://shih-test-project.firebaseio.com",
  storageBucket: "shih-test-project.appspot.com",
  messagingSenderId: "891557670496"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000