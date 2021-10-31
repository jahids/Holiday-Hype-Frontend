import React from 'react';
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword,getAuth, updateProfile, signInWithPopup,signOut, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import inisialaization from '../firebase/firebase.init';

inisialaization();

const Usefirebase = () => {
   
      
  const [user,setuser] = useState({}); 
  const [eror,seteror] = useState({}); 
  const [isloading, setloading] = useState(true);

  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

//   handle button google

    const signinusingGoogle = () => {
        setloading(true);
       return signInWithPopup(auth,googleprovider)
       
     

    }

    const logout = () => {
        setloading(true);
        const auth = getAuth();
        signOut(auth)
        .then(() => {
        
        // Sign-out successful.
        })

        .finally(() => setloading(false));

    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
              
                setuser(user);

            }else{
                setuser({})
            }

            setloading(false);

          });
          


    }, [])

    const newAccount = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            setuser(user);
            setUserName(name);
            seteror('');
            console.log(user)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
      };

      const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(() => {})
        .catch(() => {});
      }

      const newUserLogin = (email, password) => {
        console.log('this is form newUserLogin');
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setuser(user);
           
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message)
          });
      }


     


    return{
        user,
        signinusingGoogle,
        logout,
        isloading,
        setloading,
        newAccount,
        newUserLogin
    }


};

export default Usefirebase;