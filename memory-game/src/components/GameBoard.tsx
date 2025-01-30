import React, { useState, useEffect } from "react";
import Card from "./Card";
import shuffleArray from "../utils/gameLogic";
import './GameBoard.css'; // Importamos los estilos


const GameBoard: React.FC = () => {
  const [cards, setCards] = useState<{ id: number; imageId: number; isFlipped: boolean }[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  
  // Generamos las cartas al iniciar el juego
  useEffect(() => {
    const shuffledCards = shuffleArray(); // Llamamos a la función que baraja las cartas
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index: number) => {
    // No hacer nada si ya hay dos cartas seleccionadas
    if (selectedCards.length === 2 || cards[index].isFlipped) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newSelectedCards = [...selectedCards, index];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      setTimeout(() => checkMatch(newSelectedCards), 1000);
    }
  };

  const checkMatch = (selected: number[]) => {
    const [firstIndex, secondIndex] = selected;
    const newCards = [...cards];

    if (newCards[firstIndex].imageId === newCards[secondIndex].imageId) {
      // Las cartas coinciden, no hacemos nada
    } else {
      // Las cartas no coinciden, las volteamos de nuevo
      newCards[firstIndex].isFlipped = false;
      newCards[secondIndex].isFlipped = false;
    }

    setCards(newCards);
    setSelectedCards([]);
  };

  /*return (
    <div className="grid grid-cols-5 gap-2">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          imageId={card.imageId}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );*/

  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          imageId={card.imageId}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
  
};

export default GameBoard;



