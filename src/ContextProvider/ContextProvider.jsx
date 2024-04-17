import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);

//  social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateProfile = (name, image, email) => {
        setLoading(true);
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
            email: email
        })
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)

    }



    // log out
    const logout = () => {
        setUser(null)
        setLoading(true)
        signOut(auth)
    }


    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser)

            }
            setLoading(false);

        });

        return () => {
            unSubscribe();
        }
    }, [])

console.log(user)
    const allValues = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        updateProfile


    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
ContextProvider.propTypes = {
    children: PropTypes.node,
}