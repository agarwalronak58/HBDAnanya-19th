import React, { useState, useEffect } from "react";
import "./LevelFive.css";

const LevelFive = () => {
  const wordToGuess = "DEEZ NUTS GOTEEM".toLowerCase();
  const [guesses, setGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(new Set());
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    checkGameStatus();
  }, [correctGuesses, remainingAttempts]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleGuess = (letter) => {
    if (gameOver) return;
    const normalizedLetter = letter.toLowerCase();

    if (normalizedLetter === " " || guesses.includes(normalizedLetter)) {
      return; // Skip spaces and already guessed letters
    }

    if (wordToGuess.includes(normalizedLetter)) {
      setCorrectGuesses(new Set([...correctGuesses, normalizedLetter]));
      checkGameStatus(); // Check game status after updating correctGuesses
    } else {
      setWrongGuesses(new Set([...wrongGuesses, normalizedLetter]));
      setRemainingAttempts(remainingAttempts - 1);
    }

    setGuesses([...guesses, normalizedLetter]);
  };

  const handleKeyDown = (event) => {
    const letter = event.key.toLowerCase();
    if (/[a-z]/.test(letter)) {
      handleGuess(letter);
    }
  };

  const checkGameStatus = () => {
    if (wrongGuesses.size >= 6) {
      setGameOver(true);
    }

    const uniqueLettersInWord = new Set(wordToGuess.split(""));
    const guessedLetters = [...correctGuesses];
    const guessedAllLetters = [...uniqueLettersInWord].every((letter) =>
      guessedLetters.includes(letter)
    );

    if (guessedAllLetters) {
      setVictory(true);
    }
  };

  const renderWordToGuess = () => {
    return wordToGuess.split("").map((letter, index) => {
      if (letter === " ") {
        return <span className="letter" key={index}>  </span>; // Return an empty span for spaces
      }
      return (
        <span className="letter" key={index}>
          {correctGuesses.has(letter) ? letter : "_"}
        </span>
      );
    });
  };

  const renderAlphabetButtons = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split("").map((letter) => (
      <button
        className="letter-button"
        key={letter}
        onClick={() => handleGuess(letter)}
        disabled={guesses.includes(letter)}
      >
        {letter}
      </button>
    ));
  };

  const renderHangmanDrawing = () => {
    const hangmanParts = [
      // Head
      wrongGuesses.size >= 1 && <circle cx="150" cy="70" r="20" key="head" />,
      // Body
      wrongGuesses.size >= 2 && <line x1="150" y1="90" x2="150" y2="170" key="body" />,
      // Left Arm
      wrongGuesses.size >= 3 && <line x1="150" y1="110" x2="110" y2="130" key="left-arm" />,
      // Right Arm
      wrongGuesses.size >= 4 && <line x1="150" y1="110" x2="190" y2="130" key="right-arm" />,
      // Left Leg
      wrongGuesses.size >= 5 && <line x1="150" y1="170" x2="110" y2="210" key="left-leg" />,
      // Right Leg
      wrongGuesses.size >= 6 && <line x1="150" y1="170" x2="190" y2="210" key="right-leg" />,
    ];

    return (
      <svg className="hangman-drawing" viewBox="0 0 300 300">
        <circle cx="150" cy="50" r="30" stroke="#f38381" strokeWidth="2" fill="none" />
        {hangmanParts}
      </svg>
    );
  };

  const renderGuessedLetters = () => {
    const uniqueGuessedLetters = new Set([...correctGuesses, ...wrongGuesses]);
    const guessedLetters = Array.from(uniqueGuessedLetters).join(", ");
    return (
      <div className="guessed-letters">
        <span className="guessed-letters-label">Guessed Letters:</span>
        <span className="guessed-letters-list">{guessedLetters}</span>
      </div>
    );
  };

  return (
    <div className="hangman-container">
      <h1 className="hangman-title">Hangman</h1>
      <div className="hangman-word">{renderWordToGuess()}</div>
      <div className="hangman-alphabet">{renderAlphabetButtons()}</div>
      <div>{renderHangmanDrawing()}</div>
      {renderGuessedLetters()}
      {gameOver && <div className="hangman-message">Game Over! The word was "{wordToGuess}"</div>}
      {victory && (
        <div className="hangman-victory">
          <h2 className="hangman-victory-text">Congrats! You won!</h2>
        </div>
      )}
    </div>
  );
};

export default LevelFive;
