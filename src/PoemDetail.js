import React, { useState, useEffect } from "react";
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import {NavLink} from 'react-router-dom';

import './singlePoem.css';
import Votes from "./Votes.js";

const SinglePoem = ({match}) => {

  useEffect(() => {
    fetchPoems()
    console.log(match)
  },[])

  const [poem, setPoem] = useState({})

  const fetchPoems = () => {
    //Find specific poem
    axios.get(`/api/poems/${match.params.id}`)
    .then((response) => {
      console.log("response: ", response)
      setPoem(response.data)
    })
  }
  
      return (
        <div>
          <NavLink exact to='/' className="goBack">Back to list...</NavLink>
          <div className = "singlePoem"> 
            <h1>{poem.title}</h1>
            <h2>{poem.author}</h2>
            <ReactMarkdown>{poem.text}</ReactMarkdown>  
          </div>
          <Votes/>
         </div> 
         
        )
  }

  export default SinglePoem;