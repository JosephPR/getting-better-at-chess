import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Principles from "./Components/principles"
import Openings from "./Components/Openings/openings"
import './App.css';
import MasterGames from './Components/MasterGames/master-games';

function App() {
  return (
    <>
    <Router>

    <div className="nav">
    <Link className='nav-links' to='/principles'>Principles</Link>
    <Link className='nav-links' to='/openings'>Openings</Link>
    <Link className='nav-links' to='/traps'>Traps</Link>
    <Link className='nav-links' to='/master-games'>Master Games</Link>

    </div>
   
    <Route exact path="/principles" component={Principles} />
    <Route  path="/openings" component={Openings} />
    <Route  path="/master-games" component={MasterGames} />
    </Router>
  
          </>
  );
}

export default App;
