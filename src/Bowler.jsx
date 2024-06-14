import convertToOvers from "./convertToOvers";
import "./Bowler.css";

export default function Bowler({ bowlerName, bowlerStats, isBowling }) {
  const { balls, maidens, runs } = bowlerStats;
  const economyRate = balls === 0 ? 0 : (runs * 6) / balls;
  const overs = convertToOvers(balls);
  if (balls !== 0 || isBowling) {
    return (
      <div className="Bowler active">
        {bowlerName}
        {isBowling && "*"} - {overs}-{maidens}-0-{runs} [ER{" "}
        {economyRate.toFixed(1)}]
      </div>
    );
  }
  return (
    <div className="Bowler">
      {bowlerName} - {overs}-{maidens}-0-{runs} [ER {economyRate.toFixed(1)}]
    </div>
  );
}
