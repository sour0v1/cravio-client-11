import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user by email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // google sign in
    const googleSignIn = provider => {
        return signInWithPopup(auth, provider);
    }
    // github sign in
    const githubSignIn = provider => {
        return signInWithPopup(auth, provider);
    }
    // email sign in
    const emailSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // get currently signIn user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current signed in user', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    const authInfo = {
        user,
        googleSignIn,
        createUser,
        githubSignIn,
        emailSignIn,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;