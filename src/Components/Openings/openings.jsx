import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sicilian from "./sicilian"
import QueensGambit from "./queens-gambit"
import '../../App.css';
import GiuocoPiano from './giuoco-piano';


function Openings() {
  return (
    <>
    <Router>
    <div className="openings-nav">
    <Link className='nav-links' to='/sicilian'>Sicilian</Link>
    <Link className='nav-links' to='/queens-gambit'>Queens Gambit</Link>
    <Link className='nav-links' to='/giuoco-piano'>Giuoco Piano</Link>
    </div>
   
    <Route exact path="/sicilian" component={Sicilian} />
    <Route  path="/queens-gambit" component={QueensGambit} />
    <Route  path="/giuoco-piano" component={GiuocoPiano} />
    </Router>
    </>
  );
}

export default Openings;