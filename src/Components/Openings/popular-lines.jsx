import React from 'react';
import '../../App.css';
window.addEventListener("message",e=>{e['data']&&"6882504"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});function PopularLines() {
  return (
    <>
     <div className="subject">
         <h4>Most popular Ruy Lopez line:
         Ruy López Opening: Morphy Defense, Chigorin, Panov System, 13...Nc6 14.Nb3 a5 15.Be3 a4 16.Nbd2 Bd7
         </h4>
         <iframe id="6882504" title="opening-lines" allowtransparency="true" frameborder="0"  style={{width:"100%"}} src="//www.chess.com/emboard?id=6882504"></iframe>
         <iframe title="chigorin explaination" width="560" height="315" src="https://www.youtube.com/embed/NIIy3vZ5Dsc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    </>
  );
}

export default PopularLines;