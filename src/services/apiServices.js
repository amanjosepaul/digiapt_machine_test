import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase";

export const userAuthentication = async (formData) => {
  signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      console.log("signInWithEmailAndPassword: ", userCredential);
    })
    .catch((error) => {
      return alert(error);
    });
};

export const userRegistration = async (formData) => {
  createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // console.log("createUserWithEmailAndPassword: ", userCredential);
      return userCredential;
    })
    // .then((registredUser) => {
    //   console.log("registredUser: ", registredUser);
    // })
    .catch((error) => {
      return alert(error.message);
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => alert(error.message));
};
