import React, { useState } from 'react';
import FormComponent from './FormComponent';
import CakeComponent from './CakeComponent';
import Header from './Header'; // Kaldırıldı
import Footer from './Footer'; // Kaldırıldı

function App() {
  const [showCake, setShowCake] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (name, message) => {
    setName(name);
    setMessage(message);
    setShowCake(true);
  };

  return (
    <div className="App">
      {!showCake ? (
        <>
          <Header /> {/* Eklendi */}
          <FormComponent onSubmit={handleFormSubmit} />
          <Footer /> {/* Eklendi */}
        </>
      ) : (
        <CakeComponent name={name} message={message} />
      )}
    </div>
  );
}

export default App;
