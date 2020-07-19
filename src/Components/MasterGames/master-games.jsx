import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import '../../App.css';
window.addEventListener("message",e=>{e['data']&&"6876834"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6876870"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)})
function MasterGames() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
       <h1>Study The Master Games</h1>
        <div class="cbreplay" data-url="163925.pgn">
        </div>
        {/* <h1>Magnus Carlsen Dominates The Isle of Man International Masters 2017</h1>
        <div class="cbreplay" data-url="163925.pgn">
        </div> */}
       <div className="subject">
         <h1>Carlsen vs. Smeets 2006</h1>
        <h3>Sicilian Defense: Open, Sveshnikov, Chelyabinsk Variation, 9...Be7 10.Bxf6 Bxf6 11.c3 Bg5</h3>
        <ul>
            <li>the position after 19.- Bd8 is a perfect example of dynamic play from black. His position can easily be mistaken for being too passive, when it really is full of possibilities.</li>
            <li>43.Rxg3! Nice removal of the guard tactic by Magnus. White's totally dead after that...Qh1+, Rxg4, Rg1+ (if white moves the queen off the g-file) are all threats.</li>
        </ul>
        <iframe id="6876834" title="Magnus-vs-smeets-2006" allowtransparency="true" frameborder="0" style={{width:"100%"}} src="//www.chess.com/emboard?id=6876834"></iframe>
        <h1>Svidler vs. Adams 2000</h1>
        <h3>Ruy López Opening: Morphy Defense, Neo-Arkhangelsk Variation</h3>
        <p>The game below is in a puzzle format try not to look at the moves below and see if you can guess the moves for white in this game.</p>
        <Button  onClick={toggle} style={{ marginBottom: '1rem', backgroundColor: "navy" }}>Moves</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <blockquote>
        <div>1.e4&nbsp;e5&nbsp;2.Nf3&nbsp;Nc6&nbsp;3.Bb5&nbsp;a6&nbsp;4.Ba4&nbsp;Nf6&nbsp;5.O-O&nbsp;Bc5&nbsp;6.c3&nbsp;b5&nbsp;7.Bc2&nbsp;d6&nbsp;8.a4&nbsp;Bg4</div>
        <div>9.d3&nbsp;O-O&nbsp;10.h3&nbsp;Bh5&nbsp;11.Nbd2&nbsp;b4&nbsp;12.a5&nbsp;Rb8&nbsp;13.Qe2&nbsp;bxc3&nbsp;14.bxc3&nbsp;d5</div>
        <div>15.d4&nbsp;exd4&nbsp;16.Qxa6&nbsp;dxc3&nbsp;17.Qxc6&nbsp;cxd2&nbsp;18.Nxd2&nbsp;Bd4&nbsp;19.Ra4&nbsp;dxe4</div>
        <div>&nbsp;20.Nxe4&nbsp;Nxe4&nbsp;21.Bxe4&nbsp;Be2&nbsp;22.Bxh7 +Kh8&nbsp;23.Bc2&nbsp;Re8&nbsp;24.Re1&nbsp;Re6</div>
        <div>25.Qxe6&nbsp;fxe6&nbsp;26.Rxe2&nbsp;e5&nbsp;27.a6&nbsp;Qd7&nbsp;28.a7&nbsp;Ra8&nbsp;29.Rxe5&nbsp;g6</div>
        <div>30.Re4&nbsp;c5&nbsp;31.Ra6&nbsp;Rxa7&nbsp;32.Rxg6&nbsp;Bg7&nbsp;33.Bb2&nbsp;Qb5&nbsp;34.Bc3&nbsp;</div>
        <div>1-0</div>
        </blockquote>
          </CardBody>
        </Card>
      </Collapse>
        <iframe id="6876870" title="Peter-Svidler-vs-Michael-Adams-2000" allowtransparency="true" frameborder="0" style={{width:"100%"}} src="//www.chess.com/emboard?id=6876870"></iframe>
        <div>
   
    </div>
       
       
        </div>
    </>
  );
}

export default MasterGames;