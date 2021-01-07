import React, { useState, useEffect } from 'react';
import { auth, googleProvider, facebookProvider} from '../Authentication/firebase';
import { useDispatch, useSelector } from 'react-redux';

export default function SignInWithGoogle() {

    const dispatch = useDispatch();

    const googleLoginHandler = async () => {

        await auth.signInWithPopup(googleProvider).then((res) => {
            dispatch({type:'SET_LOGIN', payload: res});
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <button onClick={googleLoginHandler}>ลงชื่อเข้าใช้ด้วย Google</button>
        </div>
    )

        // const signOutHandler = async () => {
    //     await auth.signOut().then((res) => {
    //         dispatch({type:'SET_LOGOUT', payload: null});
    //     })
    //     .catch((err) => {
    //         console.log("Logout Fail" + err)
    //     })
    // }

    // const authUnsubscribe = auth.onAuthStateChanged((user) => {
        //     if(user)
        //     {
        //         setUser(user.displayName)
        //     }
        //     else{
        //         setUser(null)
        //     }
        // })
        // return () => {
        //     authUnsubscribe();
        // }



    // onLoginSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state);
    
    //     auth
    //     .signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(response => {
    //         this.setState({
    //             currentUser: response.user
    //         })
    //     })
    //     .catch(error => {
    //         this.setState({
    //             message: error.message
    //         })
    //     })
    // }
   
    // <div>
    //         {!user ? (
    //             <button onClick={googleLoginHandler}>SignIn With Google Account</button>
    //         ) : (
    //             <button onClick={signOutHandler}>Logout</button>
    //         )}
    //     </div>
}
