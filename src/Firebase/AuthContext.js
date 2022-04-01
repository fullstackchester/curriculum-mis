import React, { useContext, useState, useEffect } from 'react'
import { auth } from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from 'firebase/auth'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    const value = {
        currentUser,
        login,
        logout
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return unsub
    }, []);

    function login(email, pass) {
        return signInWithEmailAndPassword(email, pass)
    }

    function logout() {
        return signOut(auth)
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
