import { StatsDisplayProps } from "./StatsDisplay";

const StatsDisplay = ({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) => {
  return (
    <div>
      <p>Characters: {stats.characterCount}</p>
      <p>Words: {stats.wordCount}</p>

      {showReadingTime && (
        <p>Reading Time: {stats.readingTime} min</p>
      )}
    </div>
  );
};

export default StatsDisplay;