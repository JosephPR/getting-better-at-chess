import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../../App.css';
import FishingPole from './fishing-pole';

function Traps() {
  return (
    <>
    <Router>
        <div  className="openings-nav">
        <Link className='nav-links' to='/fishing-pole'>Fishing Pole</Link>

        </div>

        <Route exact path="/fishing-pole" component={FishingPole} />

    </Router>

    </>
  );
}

export default Traps;