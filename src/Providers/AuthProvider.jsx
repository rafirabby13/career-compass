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
import auth from "../Firebase/Firebase.init.js";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isUpdating, setUpdating] = useState(false);
  const [comment, setComment] = useState([]);

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
//   const updateUserPRofile = async (name, photoUrl) => {
   
//     return updateProfile(auth.currentUser, {
//         displayName: name,
//         photoURL: photoUrl,
//       })
//     //   .then(()=>{
//     //     // setUser({  ...auth.currentUser,
//     //     //     displayName: name,
//     //     //     photoURL: photoUrl,})
//     //     setUser((prev)=>{

//     //         return {
//     //             ...prev,
//     //             displayName: name,
//     //             photoURL: photoUrl
//     //         }
//     //     })
//         // setUpdating((prev)=> !prev)
//         // console.log(user.currentUser);
//     //   }
//     // )
  
//   };
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
    setUpdating,
    setComment,
    comment,
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
  }, [isUpdating]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
