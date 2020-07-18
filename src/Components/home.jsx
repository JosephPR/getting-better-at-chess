import React from 'react';
import gif from './board.gif'
import '../App.css';

function Home() {
  return (
    <>
    <h1>Start your chess journey to greatness?</h1>
    <img src={gif} alt="board-gif"/>
    </>
  );
}

export default Home;