//import start
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect } from "react";
//import end

/* AUTH: */ const auth = getAuth(app);
/* CONTEXT: */ export const AuthContext = createContext({});

//--------------------------------------------------------------------------------------

//component start here
const UserContext = ({ children }) => {
  // states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // states

  //create account promiss
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin promiss
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update promiss
  const nameAndPhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //logout promiss
  const logOut = () => {
    return signOut(auth);
  };

  //side Effects
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user resolved in onAuthstatechanged");
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //AuthProvider value;
  const authInfo = { user, createUser, signIn, nameAndPhoto, logOut, loading };

  //component return
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

/* EXPORT COMPONENT */ export default UserContext;
