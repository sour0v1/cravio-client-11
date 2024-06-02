import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

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
    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // get currently signIn user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current signed in user', currentUser);
            const email = currentUser?.email || user?.email;
            const userEmail = { email };
            setUser(currentUser);
            // step 2
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', userEmail, {
                    withCredentials : true
                })
                    .then(res => {
                        console.log(res.data)
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
            // step 4
            else{
                axios.post('http://localhost:5000/remove-token', userEmail, {
                    withCredentials : true
                })
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [user?.email])
    
    const authInfo = {
        user,
        googleSignIn,
        createUser,
        githubSignIn,
        emailSignIn,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;