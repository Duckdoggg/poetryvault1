import React, { useState, useEffect } from "react";
import axios from 'axios'
import {NavLink} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AddPoem from "./AddPoem.js";
import Nav from "./Nav.js";
import PoemDetail from './PoemDetail.js';
import About from "./About";
import './App.css';
import PV from './img/PV.png';


const baseUrl = "/api/poems"

const App = () => {
  //Navigation
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/addPoem" component={AddPoem}/>
          <Route path="/about" component={About}/>
          <Route path="/:id" component={PoemDetail}/>
        </Switch>       
      </div>
    </Router>
  );
}

//Homepage displaying a list of all poems
const Home = () => {

  const [poems, setPoems] = useState([])

  const fetchPoems = () => {
    axios.get(baseUrl)
    .then((response) => {
      console.log("response: ", response)
      setPoems(response.data)
    })
  }

  useEffect(() => {
    fetchPoems()
  },[])

  //Retrieve first 10 words for poem preview
  function getWordStr(str) {
    return str.split(/\s+/).slice(0,10).join(" ");
}

    return (
      <div>
        <div className = "poemList">
          <img  src={PV} alt="coverimg"/>
          <hr className= "horizontalLine"></hr>
          <ul className = "poemStyle">
              {poems.map((poem) => (
              <h2 key={poem.id}> 
              <div class="verticalLine">
              <li>
                <NavLink className="poemLink" to= {`/${poem.id}`}> {poem.title} </NavLink>
              </li>
              <li className = "author">
                {poem.author}
              </li>
              <li className="text">
                {getWordStr(poem.text)}...
              </li>
              </div>
              </h2>
              ))}
          </ul>
        </div>
      </div>
      )
}

export default App;
