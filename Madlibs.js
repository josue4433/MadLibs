import React, { useState } from "react";

const MadLibsGame = () => {
  const [noun, setNoun] = useState("");
  const [adjective, setAdjective] = useState("");
  const [verb, setVerb] = useState("");
  const [story, setStory] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "noun") {
      setNoun(value);
    } else if (name === "adjective") {
      setAdjective(value);
    } else if (name === "verb") {
      setVerb(value);
    }
  };

  const generateStory = () => {
    if (noun && adjective && verb) {
      const newStory = `MadLibs are everyone's ${adjective} way of passing ${noun} on a ${adjective} road trip.`;
      setStory(newStory);
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const playAgain = () => {
    setNoun("");
    setAdjective("");
    setVerb("");
    setStory("");
    setIsFilled(false);
  };

  return (
    <div>
      <h2>MadLibs Game</h2>
      <label>
        Noun:
        <input type="text" name="noun" value={noun} onChange={handleInputChange} />
      </label>
      <label>
        Adjective:
        < 
