import React, { useState, useEffect } from "react";
import axios from 'axios'
import {Route} from 'react-router-dom'
import {SmurfContext} from '../contexts/smurfContexts.js'
import "./App.css";

import MainDisplay from './MainDisplay'
import SmurfsForm from './SmurfsForm'

function App () {

  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      // console.log("After Fetch: ",response.data)
      setSmurf(response.data)

    })
    .catch(err => {console.log("There was a problem with the fetch: ", err)})

  }, [])



    return (
      <SmurfContext.Provider value={{smurf}}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      <MainDisplay/>
      <SmurfsForm/>
      </div>
      </SmurfContext.Provider>
    );
}

export default App;
