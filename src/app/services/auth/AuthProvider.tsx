'use client'
import { useEffect, useState, ReactNode } from 'react';
import { User } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '../../../lib/firebase/firebase.init';
import { ILoginPayload } from '@/app/zod/auth.validation.js';

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            setErrorMessage('');
        });
        return () => unsubscribe();
    }, []);


    const createUser = async (payload: ILoginPayload) => {
        return createUserWithEmailAndPassword(auth, payload.email, payload.password)
    }

    const signInUser = (payload: ILoginPayload) => {
        return signInWithEmailAndPassword(auth, payload.email, payload.password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const sendEmailToResetPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authData = {
        auth,
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signOutUser,
        setErrorMessage,
        errorMessage,
        sendEmailToResetPassword
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;