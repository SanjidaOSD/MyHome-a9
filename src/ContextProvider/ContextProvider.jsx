import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);

//  social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }


    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,

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