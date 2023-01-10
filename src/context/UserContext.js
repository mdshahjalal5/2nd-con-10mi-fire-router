import { createContext, useEffect, useState } from "react";
import React from 'react';
import { createUserWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, updatePassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
export const AuthContext =  createContext();
const UserContext = ({children}) => {
    const [loading, setLoading ]  = useState(true)
    const [user, setUser ] = useState({})
    // 1 
    const signUp = (mail, pass) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, mail, pass)
    }
    // 2
    const login = function(mail, pass){
        setLoading(true)
        return signInWithEmailAndPassword(auth, mail, pass)
    }
    // 3 
    function updateName(name){
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName:name})
    }
    // 4 
    const emailVerify = ()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    // 5 
    const passwordResetEmail = function(mail){
        setLoading(true)
        return sendPasswordResetEmail(auth, mail)
    }
    // 6
    const changePassword = (newPass) =>{
        setLoading(true)
        return updatePassword(auth.currentUser, newPass)
    } 
    // 7
    function providerSignIn(provider){
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // 8 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        loading, 
        setLoading, 
        user, 
        signUp, 
        login, 
        providerSignIn, 
        updateName, 
        changePassword, 
        passwordResetEmail,
        emailVerify, 
        logOut,
    }
    useEffect(function(){
        const  effect = onAuthStateChanged(auth, user=>{
            setLoading(false);
            setUser(user);
            if(user){
                // user signed in user = {}
                console.log(user);
            }
            else{
                // user not signed in user  = null 
            }
        })
        return ()=>{
            effect();
        }
    },[])
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default UserContext;