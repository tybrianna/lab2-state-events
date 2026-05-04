import "./styles.css";

interface Props {
  wordCount: number;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number;
}

const CharacterCounter = ({
  minWords = 0,
  maxWords = 1000,
  targetReadingTime,
  wordCount,
}: Props) => {
  const progress = Math.min((wordCount / maxWords) * 100, 100);

  const getColorClass = () => {
    if (wordCount < minWords) return "text-orange";
    if (wordCount > maxWords) return "text-red";
    return "text-green";
  };

  const getBarColor = () => {
    if (wordCount < minWords) return "orange";
    if (wordCount > maxWords) return "red";
    return "green";
  };

  return (
    <div className="counter-container">
      <p>Word Count: {wordCount}</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: getBarColor(),
          }}
        />
      </div>

      <p className={getColorClass()}>
        Goal: {minWords} - {maxWords} words
      </p>

      {targetReadingTime && (
        <p>Target Reading Time: {targetReadingTime} min</p>
      )}
    </div>
  );
};

export default CharacterCounter;