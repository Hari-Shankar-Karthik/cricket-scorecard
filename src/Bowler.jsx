import getBowlerStats from "./getBowlerStats";

export default function Bowler({ bowlerName, ballsBowled, setBallsBowled }) {
  const { overs, maidens, runs, economyRate } = getBowlerStats(ballsBowled);
  return (
    <div className="Bowler">
      {bowlerName} {overs} - {maidens} - 0 - {runs} (ER {economyRate})
    </div>
  );
}
