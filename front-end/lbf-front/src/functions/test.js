import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "./firestore"
import { ref, uploadBytes } from "firebase/storage"

const testUpload = async () => {

  try {
    const docRef = await addDoc(collection(db, "students"), {
      first: "Bob",
      last: "Lovelace",
      born: 1890
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const testFile = (file) => {

  const storageRef = ref(storage, 'model/ test-image')
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });

}

export { testUpload , testFile}