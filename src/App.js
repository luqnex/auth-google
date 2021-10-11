import React, { useState } from 'react'
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './Pages/Home'
import { SignIn } from './Pages/SignIn'

import { firebase } from './Firebase/firebase'

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true)
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      return setIsUserSignedIn(true)
    } 
      
    setIsUserSignedIn(false)
    
  })

  

  if (isUserSignedIn === true) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
