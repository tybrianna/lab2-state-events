import "./styles.css";

interface StatsDisplayProps {
  stats: {
    characterCount: number;
    wordCount: number;
    readingTime: number;
  };
  showReadingTime?: boolean;
}

const StatsDisplay = ({ stats, showReadingTime = true }: StatsDisplayProps) => {
  return (
    <div className="stats-container">
      <div>
        <strong>Characters:</strong> {stats.characterCount}
      </div>

      <div>
        <strong>Words:</strong> {stats.wordCount}
      </div>

      {showReadingTime && (
        <div>
          <strong>Reading Time:</strong> {stats.readingTime} min
        </div>
      )}
    </div>
  );
};

export default StatsDisplay;