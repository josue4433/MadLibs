import React, { useState } from 'react';

const stories = [
  {
    title: 'Road Trip',
    text: 'MadLibs are everyone\'s [adjective] way of passing [noun] on a [adjective] road trip.',
  },
  {
    title: 'Adventure',
    text: 'In a land far, far away, a brave [noun] set out on an [adjective] adventure to [verb].',
  },
  // Add more story options here
];

const MadLibsGame = () => {
  const [selectedStory, setSelectedStory] = useState(stories[0]);
  const [noun, setNoun] = useState('');
  const [adjective, setAdjective] = useState('');
  const [verb, setVerb] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleStoryChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedStory(stories[selectedIndex]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (noun && adjective && verb) {
      setIsFormSubmitted(true);
    }
  };

  const handleRestart = () => {
    setNoun('');
    setAdjective('');
    setVerb('');
    setIsFormSubmitted(false);
  };

  return (
    <div>
      <h1>MadLibs Game</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select a story:
          <select value={stories.indexOf(selectedStory)} onChange={handleStoryChange}>
            {stories.map((story, index) => (
              <option key={index} value={index}>
                {story.title}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Noun:
          <input type="text" value={noun} onChange={(event) => setNoun(event.target.value)} />
        </label>
        <br />
        <label>
          Adjective:
          <input type="text" value={adjective} onChange={(event) => setAdjective(event.target.value)} />
        </label>
        <br />
        <label>
          Verb:
          <input type="text" value={verb} onChange={(event) => setVerb(event.target.value)} />
        </label>
        <br />
        <button type="submit">Generate Story</button>
      </form>
      {isFormSubmitted && (
        <div>
          <h2>{selectedStory.title}</h2>
          <p>{selectedStory.text.replace('[noun]', noun).replace('[adjective]', adjective).replace('[verb]', verb)}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default MadLibsGame;
