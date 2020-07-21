import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Principles from "./Components/Principles/chess-principles"
import './App.css';
import MasterGames from './Components/MasterGames/master-games';
import Home from './Components/home';
import Sicilian from './Components/Openings/sicilian';
import QueensGambit from './Components/Openings/queens-gambit';
import GiuocoPiano from './Components/Openings/giuoco-piano';
import FishingPole from './Components/Traps/fishing-pole';
import French from './Components/Openings/french';
import TopTraps from './Components/Traps/top-traps'
import Open from './Components/Principles/the-open'
import Middlegame from './Components/Principles/middlegame';
import Endgame from './Components/Principles/endgame';
import Thinking from './Components/Principles/thinking';
import MyGames from './Components/MyGames/my-games';
import PopularLines from './Components/Openings/popular-lines';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
     <Router>
     <div className="nav">
      <Navbar className="nav-styles" light expand="xl">
        <NavbarBrand href="/">ChessMastery</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Principles
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/thinking'>How to Think</Link>
                </DropdownItem>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/principles'>75 Principles</Link>
                </DropdownItem>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/the-open'>Opening</Link>
                </DropdownItem>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/middlegame'>Middlegame</Link>
                </DropdownItem>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/endgame'>Endgame</Link>
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav >
              <DropdownToggle nav caret >
              Openings
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/popular-lines'>Popular Lines</Link>
                </DropdownItem>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/sicilian'>Sicilian</Link>
                </DropdownItem>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/queens-gambit'>Queens Gambit</Link>
                </DropdownItem>
                
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/giuoco-piano'>Giuoco Piano</Link>
                </DropdownItem>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/french'>French</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Traps
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/fishing-pole'>Fishing Pole</Link>
                </DropdownItem>
                <DropdownItem className="openings-nav">
                <Link className='nav-links' to='/top-5-traps'>Top Traps</Link>
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/mastergames"> <Link className='nav-links' to='/master-games'>MasterGames</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/mastergames"> <Link className='nav-links' to='/my-games'>My Games</Link></NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
   
   
    <Route exact path="/" component={Home} />
    <Route exact path="/thinking" component={Thinking} />
    <Route exact path="/principles" component={Principles} />
    <Route exact path="/the-open" component={Open} />
    <Route exact path="/middlegame" component={Middlegame} />
    <Route exact path="/endgame" component={Endgame} />
    
    <Route  path="/my-games" component={MyGames} />
    <Route  path="/master-games" component={MasterGames} />
    <Route exact path="/sicilian" component={Sicilian} />
    <Route exact path="/popular-lines" component={PopularLines} />
    <Route  path="/queens-gambit" component={QueensGambit} />
    <Route  path="/giuoco-piano" component={GiuocoPiano} />
    <Route  path="/french" component={French} />
    <Route  path="/top-5-traps" component={TopTraps} />

    <Route exact path="/fishing-pole" component={FishingPole} />
    </Router>
      
    <footer></footer>
          </>
  );
}

export default App;
