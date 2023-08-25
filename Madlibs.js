import React, { useState } from 'react';

const MadlibForm = ({ onSubmit }) => {
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');
  const [adjective, setAdjective] = useState('');
  // Add more state variables for other inputs

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ noun, verb, adjective }); // Pass collected inputs to parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Noun"
        value={noun}
        onChange={(e) => setNoun(e.target.value)}
      />
      <input
        type="text"
        placeholder="Verb"
        value={verb}
        onChange={(e) => setVerb(e.target.value)}
      />
      <input
        type="text"
        placeholder="Adjective"
        value={adjective}
        onChange={(e) => setAdjective(e.target.value)}
      />
      {/* Add more input fields for other parts of speech */}
      <button type="submit">Generate Story</button>
    </form>
  );
};

export default MadlibForm;
