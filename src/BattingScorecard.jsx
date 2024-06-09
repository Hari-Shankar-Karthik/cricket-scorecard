import Batter from "./Batter";

export default function BattingScorecard({ battingTeamName, ballsFaced }) {
  // TODO: ballsFaced is currently for one batter only, split it into two dimensions
  return (
    <div className="BattingScorecard">
      <Batter batterName={battingTeamName} ballsFaced={ballsFaced} />
    </div>
  );
}
