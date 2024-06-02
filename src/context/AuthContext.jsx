import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  // const [user, setUser] = useState(() => {
  //   return JSON.parse(localStorage.getItem('user')) || false;
  // });
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return localStorage.getItem('isSignedIn');
  });

  const [uid, setUid] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const signedIn = !!user;
      setIsSignedIn(signedIn);
      localStorage.setItem('isSignedIn', signedIn);
      if (signedIn) {
        setUid(user.uid);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  const exit = async () => {
    try {
      await signOut(auth);
      setIsSignedIn(false);
      localStorage.removeItem('isSignedIn');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = {
    isSignedIn,
    uid,
    signUp,
    signIn,
    exit,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
