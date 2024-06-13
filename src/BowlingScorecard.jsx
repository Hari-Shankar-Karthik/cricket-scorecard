import convertToOvers from "./convertToOvers";

export default function BowlingScorecard({ bowlingTeamName, bowlingStats }) {
  const { balls, maidens, runs } = bowlingStats;
  const economyRate = balls === 0 ? 0 : (runs * 6) / balls;
  const overs = convertToOvers(balls);
  return (
    <div className="BowlingScorecard">
      <div className="bowling-team-display">{bowlingTeamName}</div>
      <div className="bowler-display">
        {overs}-{maidens}-0-{runs} [ER {economyRate.toFixed(1)}]
      </div>
    </div>
  );
}
