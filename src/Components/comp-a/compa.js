import react from "react";
import { useState,useEffect } from "react";
import {BrowserRouter as Router,Route,Routes,Link,} from "react-router-dom"
import Compb from 

function Compa() {
  const [text,setText] = useState();
  return(
    <div>
      <Router>
        <link to="/">Home</link>
        <Routes>
          <Route path="/" element={<Compb/>}></Route>
        </Routes>
      </Router>
    </div>
  )
  
}

export default Compa;
