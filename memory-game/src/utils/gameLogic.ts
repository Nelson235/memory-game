const shuffleArray = () => {
    const numPairs = 10; // 10 pares de cartas
    const cardImages = Array.from({ length: numPairs }, (_, i) => i + 1); // Números del 1 al 10
    const allCards = [...cardImages, ...cardImages]; // Duplicamos para hacer los pares
  
    // Mezclamos el array con el algoritmo de Fisher-Yates
    for (let i = allCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }
  
    return allCards.map((imageId, index) => ({
      id: index,
      imageId,
      isFlipped: false,
    }));
  };
  
  export default shuffleArray;
  