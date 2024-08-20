import React, { useState } from 'react';
import './Form.css';

function Form({ onAddCard }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (question && answer) {
      onAddCard({ question, answer });
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <form onSubmit={handleAdd} className="form">
      <label className="form-label">
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Answer:
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="form-input"
        />
      </label>
      <button type="submit" className="form-button">Add</button>
    </form>
  );
}

export default Form;
