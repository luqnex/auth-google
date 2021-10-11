import React from 'react'
import { firebase } from '../Firebase/firebase'
import './Global.css'

export function SignIn() {
    const SignInWithFirebase = () => {
        let google_provier = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(google_provier)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="content">
            <button onClick={SignInWithFirebase}>Sign In With Google</button>
        </div>
    )
}