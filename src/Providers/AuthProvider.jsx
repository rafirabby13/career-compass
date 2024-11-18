/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.init.js'


const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider()



    const loginWithGoogle=()=>{
        return signInWithPopup(auth, provider)
    }
  const registerUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
const updateUserPRofile=(name, photoUrl)=>{

    return updateProfile(auth.currentUser,  {
        displayName: name,
        photoURL: photoUrl
    })
}
const loginWithEmailPass=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

    const authInfo = {
        loginWithGoogle,
        registerUser,
        updateUserPRofile,
        loginWithEmailPass
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;