import React from 'react';
import { Container } from 'reactstrap';
import '../../App.css';
window.addEventListener("message",e=>{e['data']&&"6877412"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)})
window.addEventListener("message",e=>{e['data']&&"6877414"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
function Thinking() {
  return (
    <>
    <Container>
<div class="subject">
    <h1>Thinking in chess</h1>
    <p>In my experience teaching, playing, and hanging out at the local chess club, I have come across many players who succeed in reaching a level in the 1600-2000 range&nbsp;<strong>but</strong>&nbsp;<strong>get stuck, often for life, trying to get beyond that and become an expert or master</strong>. My aim is to give you tools to take your game to that next level.</p>
<p>Let's tackle the problem of&nbsp;<strong>how to think in chess.</strong></p>
<p>The topic is not as ridiculous as it sounds. What I'm really talking about is a static and general mode of thinking vs. a dynamic and specific one.</p>
<p>Players in the 1600-2000 skill range have generally mastered the strategic fundamentals of openings, middlegames, and endgames and are aware of these principles during their games. However, the problem that plagues many players at this level and prevents them from improving further is that they think&nbsp;<strong>only</strong>&nbsp;in terms of these general principles.</p>
<p>Listen to a postmortem between two class players after a tournament game. You will hear many generalities, e.g. "Well I thought if I put my knight in the center, it will later be useful in an attack."&mdash;"Yes, but I thought if I saddle you with an isolated pawn, I can take advantage of it in the endgame."</p>
<p>The discussion consists almost entirely of general ideas that apply in any position.</p>
<p>Do you see what's missing from the analysis?&nbsp;<strong>Specific lines</strong>. In contrast, listen to two masters analyzing, and you will hear both of them spouting moves and variations. It's not that general principles don't apply beyond a certain level; it's that stronger players apply these principles according to the specific needs of the position.</p>
<p>To progress to expert and master, it's crucial to move beyond vague generalities and learn to think specifically about the position in front of you, as well as dynamically, i.e. in terms of specific moves.&nbsp;<strong>Calculation</strong>&nbsp;must become a major part of your thought process. Failing to do so will result in missing resources, for both yourself and your opponent, tactical errors, and outright blunders.</p>
<p>&nbsp;</p>
<iframe id="6877414" title="thinking1" allowtransparency="true" frameborder="0" style={{width:"100%"}} src="//www.chess.com/emboard?id=6877414"></iframe>
<p>Thinking in generalities and insufficient calculation come up at higher levels as well, although in more subtle ways. For the second example, I would like to show a segment from one of my own recent games.</p>
<p>&nbsp;</p>
<iframe id="6877412" title="thinking2" allowtransparency="true" frameborder="0" style={{width:"100%"}} src="//www.chess.com/emboard?id=6877412"></iframe>
<p>As you can see, making decisions based only on general principles and ideas leads to errors and ultimately loses games. To improve your approach to the game, and your results these are the steps I would like you to take:</p>
<ul>
<li>Do not abandon fundamental principles, but look for a move that's based on a good idea&nbsp;and leads to a specific follow-up in order to achieve a specific goal in the given position (rather than making a move only to fulfill an idea). For example, instead of thinking "I will play Re1 because a rook belongs on an open file," you would approach it as, "Re1, putting the rook on an open file, will enable (moves X, Y, Z) in order to (start a kingside attack / win a pawn / etc.)."</li>
<li>Identify specific threats, both for you and for your opponent. Come up with several candidate moves. Then identify candidate responses for your opponent to each of your candidate moves. Look for the best move for&nbsp;both sides.&nbsp;Calculate variations. Practice doing this on every move.</li>
<li>To emphasize the point again: Get into the habit of&nbsp;calculating. I'm not even asking you to calculate&nbsp;accurately. That's important, but it's the next step. The first step is to train yourself to calculate, period.</li>
</ul>
<p>The primary guiding principle of analyzing your opponent&rsquo;s threats, weaknesses, and potential plans first before looking at your own, should have, in the first example, lead to the realization that the back rank was undefended. This tells us defense is in order and so quiet positional improvements were probably not going to be part of the main plan, leaving only more active plans as viable ones.<br />Once this was known it could then have been determined whether or not whites threat was stronger and would have come faster than blacks, thus defending indirectly through an offensive threat. Otherwise, it would be clear that white must defend in a more direct way, such as blocking the immediate threat with Rg7 to f7, or by moving the King to a safer square, or perhaps by making an even better move. Calculations could have been made for each candidate move to determine which line of attack and/or defense worked best as a plan of action and then the right move could have been made. If you missed the main idea, you learn something, often making you a better player on the spot. If you had the right idea but failed to calculate correctly, ask yourself, in what way was the calculation inaccurate? Was it a visualization error such as not mentally moving or removing pieces properly in the mind, was it a working memory capacity issue, a failure to recognize an important in-between move, was it a pattern recognition issue, or was it ultimately a failure to take stock of the resulting position at the end of those moves and to properly assess whether or not that resulting new position was in your favor. Was it something else entirely or maybe several things? Once you come to understand what caused the inaccuracy, ask yourself how you could prevent that from happening in the future and then test your idea for prevention to see if it works or if something else is needed. Reiterate until you find a way to strengthen the weakness in calculation ability.</p>
<p>Obviously, to play chess well requires time and if you don't have the time to work through the position properly then you must risk making an error, so you must decide whether or not to make the safest move you can, or to make the most complicated move you can, providing sauce for the goose. The lack of speed, even if play is accurate, leads to time trouble and loss. Proper and consistent study, practice, and plenty of solid post game analysis, eventually leads to the ability to be accurate in all situations you might encounter. Speed follows accuracy over time as you practice drills, learn new material, and analyze your play until you reach your peak in both speed and accuracy, at which point you cannot continue to make improvements. Often people think they've reached their peak without looking into ways to expand their capacity for working memory, long term memory, and visualization skills. There may be ways to sharpen and optimize your cognitive abilities or ways that allow you to think more creatively.</p>
<p>When people speak of general guiding principles and the correct way to think when playing chess, this is what I think they are referring to. What it seems they are referring to instead are situations where there are competing principles involved and you need to determine through analysis, which should be followed, and which should be ignored or treated as secondary in a given situation. There are always competing ideas, finding and correctly executing the best ones are what champions do better than their opponents. I'm not certain that computers have ideas, but a good one can beat you like a drum and leave you bleeding out of both ears.</p>

</div>
</Container>
</>
);
}

export default Thinking;
