import Batter from "./Batter";

export default function BattingScorecard({
  battingTeamName,
  batterList,
  ballsFaced,
  activeBatter,
}) {
  // TODO: ballsFaced is currently for one batter only, split it into two dimensions
  return (
    <div className="BattingScorecard">
      <div className="batting-team-name">{battingTeamName}</div>
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
