import React, { useState } from 'react';

function FormComponent({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ad gir"
        required
      />
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mesajını yaz"
        required
      />
      <button type="submit">Hazırla</button>
    </form>
  );
}

export default FormComponent;
