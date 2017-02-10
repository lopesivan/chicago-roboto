import { auth } from '../config/constants'
import * as firebase from 'firebase'

export function login() {
  var provider = new firebase.auth.GoogleAuthProvider()
  return auth.signInWithPopup(provider)
}

export function logout() {
  return auth.signOut()
}

export function loggedIn() {
  return auth.currentUser
}