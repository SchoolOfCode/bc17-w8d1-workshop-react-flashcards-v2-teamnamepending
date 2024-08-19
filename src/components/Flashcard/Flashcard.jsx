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
          {"What is React?"}
        </div>
        <div className="flashcard-back">
          {"Answer: React is a JavaScript library for building user interfaces."}
        </div>
      </div>
    </div>



  );
}

export default Flashcard;


