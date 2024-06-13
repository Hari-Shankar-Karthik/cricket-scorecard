import Batter from "./Batter";
import convertToOvers from "./convertToOvers";

export default function BattingScorecard({
  battingTeamName,
  batterList,
  battingStats,
  strikeBatter,
  nonStrikeBatter,
}) {
  const { team, batters } = battingStats;
  const teamOvers = convertToOvers(team.balls);
  const batterDisplay = [];
  for (let i = 0; i < 11; i++) {
    batterDisplay.push(
      <Batter
        key={i}
        batterName={batterList[i]}
        batterStats={batters[i]}
        batterStatus={
          i === strikeBatter ? true : i === nonStrikeBatter ? false : null
        }
      />
    );
  }
  return (
    <div className="BattingScorecard">
      <div className="batting-team-display">
        {battingTeamName} - {team.runs} ({teamOvers})
      </div>
      <div className="batter-display">{batterDisplay}</div>
    </div>
  );
}
