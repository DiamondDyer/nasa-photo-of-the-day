import React, {useState, useEffect} from "react";
import "./App.css";
import {API_KEY, BASE_URL} from '../constants'
import axios from 'axios'
import Info from './info'

function App() {
  const [picture, setPicture] = useState(null)

  useEffect(() => {
   axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then( res => {
      setPicture(res.data.url)
      
    })
    .catch(err => {
      console.log(err)
    })

  }, [])
  return (
    <div className="App">
      <div><h1>NASA PHOTO OF THE DAY</h1></div>
      <div><img src = {picture} alt ='nasa'></img></div>
      <div><Info/></div>
    
    </div>
  );
}

export default App;
