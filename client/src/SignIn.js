import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase/firebase';

export default function SignIn() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authUnsubscribe = auth.onAuthStateChanged((user) => {
            if(user)
            {
                setUser(user.displayName)
            }
            else{
                setUser(null)
            }
        })
        return () => {
            authUnsubscribe();
        }
    }, [])

    const googleLoginHandler = async () => {
        auth.signInWithPopup(googleProvider);
    }

    const signOutHandler = () => {
        auth.signOut().then((res) => {
            console.log("Logout Complete");
            setUser(null);
        })
        .catch((err) => {
            console.log("Logout Fail" + err)
        })
    }

    return (
        <div>
            {!user ? (
                <button onClick={googleLoginHandler}>SignIn With Google Account</button>
            ) : (
                <button onClick={signOutHandler}>Logout</button>
            )}
        </div>
    )

}
