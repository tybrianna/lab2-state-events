import { useState } from "react";
import TextInput from "./TextInput";
import StatsDisplay from "./StatsDisplay";
import CharacterCounter from "./CharacterCounter";
import { TextStats } from "./StatsDisplay";

const App = () => {
  const [text, setText] = useState("");

  const calculateStats = (input: string): TextStats => {
    const words = input.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    return {
      characterCount: input.length,
      wordCount,
      readingTime: Math.ceil(wordCount / 200), // avg 200 wpm
    };
  };

  const stats = calculateStats(text);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Text Analyzer</h1>

      <TextInput onTextChange={setText} />

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