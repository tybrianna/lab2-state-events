import { CharacterCounterProps } from "./CharacterCounter";

interface Props extends CharacterCounterProps {
  wordCount: number;
}

const CharacterCounter = ({
  minWords = 0,
  maxWords = 1000,
  targetReadingTime,
  wordCount,
}: Props) => {
  const isBelowMin = wordCount < minWords;
  const isAboveMax = wordCount > maxWords;

  return (
    <div>
      <p>Words: {wordCount}</p>

      {minWords > 0 && (
        <p style={{ color: isBelowMin ? "red" : "green" }}>
          Min Words: {minWords}
        </p>
      )}

      {maxWords && (
        <p style={{ color: isAboveMax ? "red" : "green" }}>
          Max Words: {maxWords}
        </p>
      )}

      {targetReadingTime && (
        <p>Target Reading Time: {targetReadingTime} min</p>
      )}
    </div>
  );
};

export default CharacterCounter;