import React from "react";
import Timer from "./Timer";

interface HeaderProps {
  gameStarted: boolean;
  score: number;
  onRestart: () => void;
}

const Header: React.FC<HeaderProps> = ({ gameStarted, score, onRestart }) => {
  return (
    <div className="header">
      {gameStarted && <Timer isActive={gameStarted} />}
      <div className="score">
        <p>Puntaje: {score}</p>
      </div>
      <button onClick={onRestart}>Reiniciar Juego</button>
    </div>
  );
};

export default Header;
