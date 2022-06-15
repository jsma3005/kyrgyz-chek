import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD9yzv6GtTnHsd0udOXKQgaVwC2TgiR4Y0',
  authDomain: 'kyrgyz-chek.firebaseapp.com',
  databaseURL: 'https://kyrgyz-chek-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'kyrgyz-chek',
  storageBucket: 'kyrgyz-chek.appspot.com',
  messagingSenderId: '788530235751',
  appId: '1:788530235751:web:c7a68878869a02490807c2',
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)