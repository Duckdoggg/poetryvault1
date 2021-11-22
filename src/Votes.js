import React, { useState } from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './App.css';


function Votes() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div>
        <button onClick={handleIncrement}><KeyboardArrowUpIcon/></button>
        <h5>{count}</h5>
        <button onClick={handleDecrement}><KeyboardArrowDownIcon/></button>
 
      </div>
    </div>
  );
}

export default Votes;