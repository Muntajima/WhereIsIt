/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogout = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData);
    }
    

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser?.email){
                const user = {email: currentUser.email};

                axios.post('https://where-is-it-jet.vercel.app/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log('logout', res.data);
                    setLoading(false);
                })
            }
            else{
                axios.post('https://where-is-it-jet.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data);
                    setLoading(false);
                })
            }
            
        })

        return () =>{
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        googleLogin,
        userLogin,
        userLogout,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;