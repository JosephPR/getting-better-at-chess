import React from 'react';
import Games from "./games"
import '../../App.css';
window.addEventListener("message",e=>{e['data']&&"6897072"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6895864"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6892990"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6891168"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6882468"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6879284"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6879274"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
window.addEventListener("message",e=>{e['data']&&"6879220"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});

  
  function MyGames() {
  
  
   
       const gamesMap =  Games.map(game => {
         return (
          <div class="game-box animatedParent animateOnce" data-appear-top-offset="-200">
          <div class="wrapper">
              <div class="thumb game-box-thumb animated fadeInUpShort lazy-bg" >
      
                  <div class="title">
                      <h2>{game.opening}</h2>
                      <p> {game.notes}</p> 
                  </div>
                  <div class="overlay">
                  
            
                  <iframe id={game.id} title="My Games" allowtransparency="true" frameborder="0" style={{width:"100%"}}  src={game.src}></iframe>
                 
                      <div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      
         )
       })

  return (
    <>
      <h1>Study Games</h1>
      {gamesMap}
    </>
  );
}

export default MyGames;