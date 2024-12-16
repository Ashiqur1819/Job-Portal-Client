import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext(null);
export const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Sign up
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // Log in
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google login
    const loginWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };

    // Log out
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe;
        }

    }, [])

    const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      loginUser,
      userLogOut,
      loginWithGoogle,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;