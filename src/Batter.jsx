import getBatterStats from "./getBatterStats";

export default function Batter({ batterName, ballsFaced }) {
  const { runs, balls, fours, sixes, strikeRate } = getBatterStats(ballsFaced);
  return (
    <div className="Batter">
      {batterName} - {runs} ({balls}) [4s {fours}, 6s {sixes}, SR{" "}
      {strikeRate.toFixed(1)}]
    </div>
  );
}
