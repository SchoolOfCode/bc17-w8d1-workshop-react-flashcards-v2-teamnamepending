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

  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  return (
    <div className="App">
      <Header />
      <Form addFlashcard={addFlashcard} />
      <Flashcard />
      <Footer />
    </div>
  );
}

export default App;
