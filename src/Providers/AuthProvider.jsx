/* eslint-disable react/prop-types */
import { createContext } from "react";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/Firebase.init.js'


const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider()



    const loginWithGoogle=()=>{
        return signInWithPopup(auth, provider)
    }



    const authInfo = {
        loginWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;