import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

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
      <Footer />
    </div>
  );
}

export default App;
