import Bowler from "./Bowler";
import convertToOvers from "./convertToOvers";

export default function BowlingScorecard({
  bowlingTeamName,
  bowlerList,
  bowlingStats,
  bowler,
}) {
  const bowlerDisplay = [];
  for (let i = 0; i < 11; i++) {
    bowlerDisplay.push(
      <Bowler
        key={i}
        bowlerName={bowlerList[i]}
        bowlerStats={bowlingStats[i]}
        isBowling={i === bowler ? true : false}
      />
    );
  }
  return (
    <div className="BowlingScorecard">
      <div className="bowling-team-display">{bowlingTeamName} Bowling</div>
      <div className="bowler-display">{bowlerDisplay}</div>
    </div>
  );
  // const { balls, maidens, runs } = bowlingStats;
  // const economyRate = balls === 0 ? 0 : (runs * 6) / balls;
  // const overs = convertToOvers(balls);
  // return (
  //   <div className="BowlingScorecard">
  //     <div className="bowling-team-display">{bowlingTeamName}</div>
  //     <div className="bowler-display">
  //       {overs}-{maidens}-0-{runs} [ER {economyRate.toFixed(1)}]
  //     </div>
  //   </div>
  // );
}
