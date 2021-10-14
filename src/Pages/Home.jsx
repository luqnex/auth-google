import React from 'react'
import { firebase } from '../Firebase/firebase'

import './Global.css'

export function Home() {
    const signOut = () => {
        firebase.auth().signOut()
    }

    return (
        <div className="content">
            <h1>Your is loged!</h1>
            <button className="sign-out" onClick={signOut}>Sign Out</button>
        </div>
    )
}