import React, { useState } from 'react';
import './Form.css';

function Form({ setQuestion, setAnswer }) {
  const [localQuestion, setLocalQuestion] = useState('');
  const [localAnswer, setLocalAnswer] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    
    if (localQuestion) {
      setQuestion(localQuestion);  // Update the global question state
    }
    if (localAnswer) {
      setAnswer(localAnswer);  // Update the global answer state
    }
  };

  return (
    <form onSubmit={handleUpdate} className="form">
      <label className="form-label">
        Question:
        <input
          type="text"
          value={localQuestion}
          onChange={(e) => setLocalQuestion(e.target.value)}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Answer:
        <input
          type="text"
          value={localAnswer}
          onChange={(e) => setLocalAnswer(e.target.value)}
          className="form-input"
        />
      </label>
      <button type="submit" className="form-button">Add</button>
    </form>
  );
}

export default Form;
