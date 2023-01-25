import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";

export const userAuthentication = async (formData) => {
  let response = signInWithEmailAndPassword(
    auth,
    formData.email,
    formData.password
  )
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      return alert(error);
    });
  return response;
};

export const userRegistration = async (formData) => {
  createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: formData.name,
      });
      return userCredential;
    })

    .catch((error) => {
      return alert(error.message);
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => alert(error.message));
};

export const savePost = async (formData) => {
  const db = getDatabase();
  let rep = await set(
    ref(db, `user-posts/${(Math.random() * 1e20).toString(36)}`),
    {
      author: formData.author,
      title: formData.title,
      category: formData.category,
      description: formData.description,
      postDate: new Date().toDateString(),
      id: formData.id,
    }
  );

  return rep;
};

export const getAllPostData = async (id) => {
  const dbRef = ref(getDatabase());
  let resp = await get(child(dbRef, id))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return;
      }
    })
    .catch((error) => error.message);

  return resp;
};
