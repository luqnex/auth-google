import React from 'react'
import { firebase } from '../Firebase/firebase'

import './Global.css'

export function Home() {
    const signOut = () => {
        firebase.auth().signOut()
    }

    return (
        <div className="content">
            <h1>Home</h1>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}