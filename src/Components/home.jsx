import React from 'react';

import gif from './board.gif'
import '../App.css';

function Home() {
  return (
    <>
    
    <img className="board" src={gif} alt="board-gif"/>
    </>
  );
}

export default Home;