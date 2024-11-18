import React, { useState } from "react";
import GameGrid from "./GameGrid.js";

function Game() {
   // Step 1: Use useState to track moves and turn
   const [moves, setMoves] = useState(new Array(9).fill(""));
   const [turn, setTurn] = useState("X");

   // Step 3: Handle square clicks
   function gridClick(whichSquare) {
      if (moves[whichSquare] === "") { // Check if square is empty
         const movesCopy = [...moves];
         movesCopy[whichSquare] = turn;
         setMoves(movesCopy); // Update moves state
         
         // Alternate turn
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   // Step 5: Reset the game
   function newGame() {
      setMoves(new Array(9).fill(""));
      setTurn("X");
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;
