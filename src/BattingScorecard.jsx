import Batter from "./Batter";
import { getBattingTeamStats, convertToOvers } from "./utils";

export default function BattingScorecard({
  battingTeamName,
  batterList,
  ballsFaced,
  activeBatter,
}) {
  const { teamRuns, teamBalls } = getBattingTeamStats(ballsFaced);
  const { completedOvers, oddBalls } = convertToOvers(teamBalls);
  return (
    <div className="BattingScorecard">
      <div className="batting-team-name">
        {battingTeamName} - {teamRuns} ({completedOvers}.{oddBalls})
        {battingTeamName}
      </div>
      <div className="batter-list">
        {batterList.map((batter, index) => (
          <Batter
            key={index}
            batterName={batter}
            ballsFaced={ballsFaced[index]}
            isActive={activeBatter === index}
          />
        ))}
      </div>
    </div>
  );
}
