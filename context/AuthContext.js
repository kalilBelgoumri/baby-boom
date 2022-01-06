import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  sendEmailVerification,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
  updateProfile
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("The user is", currentUser);
  }, [currentUser]);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    });
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword);
  }

  function logout() {
    return signOut(auth);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function sendEmailVerification() {
    // [START auth_send_email_verification]
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        // ...
      });
    // [END auth_send_email_verification]
  }

  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
    .then(() => {
      // Update successful
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  const value = {
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    sendEmailVerification,
    updateProfile
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
