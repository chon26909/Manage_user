import React, { useState, useEffect } from 'react';
import { auth, firestore , googleProvider, facebookProvider} from '../Authentication/firebase';
import { useDispatch, useSelector } from 'react-redux';

export default function SignInWithGoogle() {

    const dispatch = useDispatch();

    const googleLoginHandler = async () => {

        const result = await auth.signInWithPopup(googleProvider);
            dispatch({type:'SET_LOGIN', payload: result});
            if(result) {
                const user = await firestore.collection('users');
                const userref = await user.doc(result.user.uid);
                // const doc = userref.get()
                console.log(result.user.uid)
                await userref.get().then((doc) => {
                    console.log(doc.data())
                    if(!doc.data()){
                        
                        userref.set({
                            uid: result.user.uid,
                            displayName: result.user.displayName,
                            photoURL: result.user.photoURL,
                            email: result.user.email,
                            role:"user",
                        })
                        console.log("เพิ่มข้อมูแล้วเน้อ");
                    }
                    else{
                        console.log("มีผู้ใช้นี้แล้ว");
                    }
                })
                console.log(userref);
            }    

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
