import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header"; // ✅ Ya contiene el título y el Timer

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setScore(0);
    setGameStarted(true);
  };

  const onRestart = () => {
    setScore(0);
    setGameStarted(false);
  };

  return (
    <div className="app flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Memory Game</h1>
      {!gameStarted ? (
        <button
          onClick={startGame}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Play
        </button>
      ) : (
        <>
          <Header gameStarted={gameStarted} score={score} onRestart={onRestart} />
          <div className="mt-4">
            <GameBoard />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

