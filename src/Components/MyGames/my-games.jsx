import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import '../../App.css';
window.addEventListener("message",e=>{e['data']&&"6882468"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6879284"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6879274"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6879220"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
function MyGames() {
 
  return (
    <>
       <h1>Study Games</h1>
        {/* <div class="cbreplay" data-url="163925.pgn">
        </div> 
        <h1>Magnus Carlsen Dominates The Isle of Man International Masters 2017</h1>
        <div class="cbreplay" data-url="163925.pgn">
        </div> */}
       <div className="subject">
           <h4>Ruy López Opening: Old Steinitz Defense, 4.O-O<br/> Almost blundered away the advantage on move thirteen, but my opponent blundered the next move as well.
           Attacking the center immediately is the theme here.</h4>
       <iframe id="6882468"title="My Games" allowtransparency="true" frameborder="0" style={{width:"100%"}} src="//www.chess.com/emboard?id=6882468"></iframe>
       <iframe id="6879284" title="My Games" allowtransparency="true" frameborder="0" style={{width:"100%"}} src="//www.chess.com/emboard?id=6879284"></iframe>
       <iframe id="6879274" title="My Games" allowtransparency="true" frameborder="0" style={{width:"100%"}} src="//www.chess.com/emboard?id=6879274"></iframe>
       <iframe id="6879220" title="My Games" allowtransparency="true" frameborder="0" style={{width:"100%"}} src="//www.chess.com/emboard?id=6879220"></iframe>
        </div>
    </>
  );
}

export default MyGames;