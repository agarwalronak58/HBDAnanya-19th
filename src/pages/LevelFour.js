import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LevelFour.css";

function LevelFour() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [userIsNext, setUserIsNext] = useState(true);
  const navigate = useNavigate(); // useNavigate hook

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[i]) return;
    boardCopy[i] = userIsNext ? "X" : "O";
    setBoard(boardCopy);
    setUserIsNext(!userIsNext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setUserIsNext(true);
  };

  useEffect(() => {
    if (!userIsNext && !calculateWinner(board)) {
      setTimeout(makeBestMove, 500);
    }
  }, [userIsNext]);

  const makeBestMove = () => {
    // Chance for the bot to make a mistake
    const mistakeChance = 0.15; // 15% chance

    if (Math.random() < mistakeChance) {
      makeRandomMove();
    } else {
      let bestScore = -Infinity;
      let move;
      for (let i = 0; i < 9; i++) {
        if (!board[i]) {
          let newBoard = [...board];
          newBoard[i] = "O";
          let score = minimax(newBoard, 0, false);
          if (score > bestScore) {
            bestScore = score;
            move = i;
          }
        }
      }
      handleClick(move);
    }
  };

  const makeRandomMove = () => {
    let availableMoves = [];
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        availableMoves.push(i);
      }
    }
    if (availableMoves.length > 0) {
      const randomMove =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      handleClick(randomMove);
    }
  };

  const minimax = (newBoard, depth, isMaximizing) => {
    let winner = calculateWinner(newBoard);

    if (winner !== null) {
      if (winner === "O") {
        return 10 - depth;
      } else if (winner === "X") {
        return depth - 10;
      }
      return 0; // Draw
    }

    // If there are no moves left and no winner then it is a draw
    if (!newBoard.includes(null)) {
      return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!newBoard[i]) {
          newBoard[i] = "O";
          let score = minimax([...newBoard], depth + 1, false);
          newBoard[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!newBoard[i]) {
          newBoard[i] = "X";
          let score = minimax([...newBoard], depth + 1, true);
          newBoard[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const calculateWinner = (newBoard) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (!board.includes(null)) {
    status = "Draw!";
  } else {
    status = `Next player: ${userIsNext ? "X" : "O"}`;
  }

  return (
    <div className="level-four-container">
      <h1 className="level-four-title">Level Four</h1>
      <p className="level-four-description">
        <span style={{ color: "#f38381", fontWeight: "bold", fontSize: "18px" }}>
          This is Level Four. Should be an easy one, just a simple Tic-Tac-Toe.
          Good luck because you are not moving on until you are DONE!
        </span>
      </p>
      <div className="status">{status}</div>
      <button className="restart-button" onClick={restartGame}>
        Restart Game
      </button>
      {winner === "X" && (
        <button
          className="next-level-button"
          onClick={() => navigate("/level-five")}
        >
          Next Level
        </button>
      )}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default LevelFour;
