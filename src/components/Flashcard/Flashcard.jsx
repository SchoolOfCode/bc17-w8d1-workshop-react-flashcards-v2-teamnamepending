import React, { useState } from 'react';

// Flashcard component 

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  // Flip the flashcard on click

  const flipCard = () => {
    setFlipped(!flipped);
  };


  return (
    <div className={`flashcard ${flipped? 'flipped' : ''}`} onClick={flipCard}>
      <div className="flashcard-content">
        <div className="flashcard-front">
          {question}
        </div>
        <div className="flashcard-back">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;


