import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "./firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { FoundFormProps } from "./types"
const { v4: uuidv4 } = require('uuid');

const submitForm = async (form: FoundFormProps) => {
  const uniqueID = uuidv4();
  const storageRef = ref(storage, `items/${uniqueID}`)

  const snapshot = await uploadBytes(storageRef, form.image as File)
  console.log('Uploaded a blob or file!');
  const url = await getDownloadURL(snapshot.ref)

  const headers = new Headers();
  headers.append('header_url_key', url);

  const response = await fetch('http://localhost:5000/api/url', {
    method: 'GET',
    headers: headers,
  })

  const categories = await response.json()
  if (categories.length === 0) {
    const docRef = await addDoc(collection(db, "Categories", "Others", "Items"), {
      ImageUrl: url,
      description: form.description,
      handle: form.handle
    })
    console.log("Document written with ID: ", docRef.id);
  }
  else {
    categories.forEach(async (category: string )=> {
      console.log(category)
      const docRef = await addDoc(collection(db, "Categories", category, "Items"), {
        ImageUrl: url,
        description: form.description,
        handle: form.handle,
        date: new Date()
      })
      console.log("Document written with ID: ", docRef.id);
    });
  }
}

export { submitForm }