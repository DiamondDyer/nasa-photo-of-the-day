import React, {useState, useEffect} from "react";
import "./App.css";
import {API_KEY, BASE_URL} from '../constants'
import axios from 'axios'


function Info() {
    
    const [info, setInfo] = useState(null)
  
    useEffect(() => {
     axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then( res => {
       setInfo(res.data)
      
        
      })
      .catch(err => {
        console.log(err)
      })
  
    }, [])
    return (
      <div className="App">
          {
            info &&
            <>
            <p>Copyright: {info.copyright}</p>
            <p>Date: {info.date}</p>
            <p>Explanation: {info.explanation}</p>

            </>
          }

         
       
       
      </div>
    );
  }
  
  export default Info;