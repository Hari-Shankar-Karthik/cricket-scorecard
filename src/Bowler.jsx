import convertToOvers from "./convertToOvers";

export default function Bowler({ bowlerName, bowlerStats, isBowling }) {
  const { balls, maidens, runs } = bowlerStats;
  if (balls === 0 && !isBowling) {
    return <></>;
  }
  const economyRate = balls === 0 ? 0 : (runs * 6) / balls;
  const overs = convertToOvers(balls);
  return (
    <div className="Bowler">
      {bowlerName}: {overs}-{maidens}-0-{runs} [ER {economyRate.toFixed(1)}]
    </div>
  );
}
