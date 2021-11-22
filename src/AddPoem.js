import React from 'react';
import { useState} from "react";
import axios from 'axios'

import PoemForm from "./PoemForm.js"
import './Form.css'

const baseUrl = "/api/poems"

function AddPoem() {

    const [poems, setPoems] = useState([])

    const addNewPoem = (newPoem) => {
      //api request to post
      axios.post(baseUrl, newPoem)
      .then(response => {
        console.log("POST response", response)
        setPoems([...poems, response.data])
      })
    }

    return (
        <div className = "App">
            <h1 className= "formTitle">Add Poem</h1> 
            <hr className= "horizontalLine2"></hr>  
            <PoemForm updateFn={addNewPoem}/>
        </div>
    )
}

export default AddPoem;