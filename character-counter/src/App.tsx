import { useState, useMemo } from "react";
import "./styles.css";

type TextStats = {
  characterCount: number;
  wordCount: number;
  readingTime: number;
};

type TextInputProps = {
  text: string;
  onTextChange: (text: string) => void;
  placeholder?: string;
};

const StatsDisplay = ({ stats }: { stats: TextStats }) => (
  <div className="stats-display">
    <p>Characters: {stats.characterCount}</p>
    <p>Words: {stats.wordCount}</p>
    <p>Reading time: {stats.readingTime} min</p>
  </div>
);

const TextInput = ({ text, onTextChange, placeholder }: TextInputProps) => (
  <textarea
    className="text-input"
    value={text}
    onChange={(event) => onTextChange(event.target.value)}
    placeholder={placeholder}
  />
);

type CharacterCounterProps = {
  wordCount: number;
  minWords: number;
  maxWords: number;
  targetReadingTime: number;
};

const CharacterCounter = ({ wordCount, minWords, maxWords, targetReadingTime }: CharacterCounterProps) => {
  const wordStatus = wordCount < minWords ? "Below minimum" : wordCount > maxWords ? "Above maximum" : "Within range";

  return (
    <div className="character-counter">
      <p>Word count: {wordCount}</p>
      <p>Status: {wordStatus}</p>
      <p>Target reading time: {targetReadingTime} min</p>
    </div>
  );
};

const App = () => {
  const [text, setText] = useState("");

  const stats: TextStats = useMemo(() => {
    if (!text.trim()) {
      return {
        characterCount: 0,
        wordCount: 0,
        readingTime: 0,
      };
    }

    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    return {
      characterCount: text.length,
      wordCount,
      readingTime: Math.ceil(wordCount / 200),
    };
  }, [text]);

  return (
    <div className="app-container">
      <h1 className="title">Text Analyzer</h1>

      <TextInput
        text={text}
        onTextChange={setText}
        placeholder="Type or paste your text here..."
      />

      <StatsDisplay stats={stats} />

      <CharacterCounter
        wordCount={stats.wordCount}
        minWords={10}
        maxWords={200}
        targetReadingTime={1}
      />
    </div>
  );
};

export default App;