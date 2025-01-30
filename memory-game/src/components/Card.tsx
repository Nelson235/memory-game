import React from "react";
import "./Card.css"; // Importamos el archivo de estilos


interface CardProps {
  imageId: number;
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ imageId, isFlipped, onClick }) => {
  const backImage = "/images/back.jpg"; // Imagen de la parte trasera
  const frontImage = `/images/${imageId}.jpg`; // Imagen frontal de la carta

  return (
    <div className="card" onClick={onClick}>
      <img
        src={isFlipped ? frontImage : backImage}
        alt="Card"
        className={`card-image ${isFlipped ? "flipped" : ""}`}
      />
    </div>
  );
};

export default Card;



