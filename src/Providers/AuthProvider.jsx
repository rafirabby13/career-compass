/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init.js";

export const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserPRofile = (name, photoUrl) => {
   
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      })
  
  };
  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const forgetPassword = (email) => {
    setLoading(true);

    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    loginWithGoogle,
    registerUser,
    user,
    loading,
    email,
    setUser,
    forgetPassword,
    setEmail,
    logoutUser,
    updateUserPRofile,
    loginWithEmailPass,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
