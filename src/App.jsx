import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Flashcard from './components/Flashcard/flashcard.jsx';
import Form from './components/Form/Form.jsx';

import './App.css';
import './components/Header/Header.module.css';
import './components/Footer/Footer.module.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('What is React?');
  const [answer, setAnswer] = useState('React is a JavaScript library for building user interfaces.');


  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  return (
    <div className="App">
      <Header />
      <Form setQuestion={setQuestion} setAnswer={setAnswer} /> 
      <Flashcard question={question} answer={answer} /> 
      <Footer />
    </div>
  );
}

export default App;
