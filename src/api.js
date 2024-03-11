import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "dunder-mifflin-a28e0.firebaseapp.com",
  projectId: "dunder-mifflin-a28e0",
  storageBucket: "dunder-mifflin-a28e0.appspot.com",
  messagingSenderId: "1023018628930",
  appId: "1:1023018628930:web:d9b054dd3604bcf386fadb",
  measurementId: "G-VF4DDW3RB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const productsCollectionRef = collection(db, "product")

export async function getProducts() {
  const querySnapshot = await getDocs(productsCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  return dataArr
}

export async function setNewProduct() {
    const dataRef = doc(db, "product", "15")
    const docData = {
      description: "Introducing Dunder Mifflin A4 Yellow Paper 80g - the unsung hero of your office supplies arsenal! Crafted with precision and reliability in mind, this masterpiece delivers unrivaled quality and performance. With its smooth texture and sturdy construction, Dunder Mifflin A4 Yellow Paper 80g is the perfect canvas for your big ideas to shine.",
      dimension: "A4",
      image: "yello_paper.jpg",
      price: "19.99",
      quantity: "50",
      type: "yellow paper",
      weight: "80g"
      }
  await setDoc(dataRef, docData)
}