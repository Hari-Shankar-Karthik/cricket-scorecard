import getBatterStats from "./getBatterStats";

export default function Batter({ batterName, ballsFaced, isActive }) {
  if (ballsFaced === null) {
    return <div className="Batter">{batterName} - Yet to bat</div>;
  }
  const { runs, balls, fours, sixes, strikeRate } = getBatterStats(ballsFaced);
  return (
    <div
      className="Batter"
      style={{
        fontWeight: isActive ? "bold" : "normal",
      }}
    >
      {batterName} - {runs} ({balls}) [4s {fours}, 6s {sixes}, SR{" "}
      {strikeRate.toFixed(1)}]
    </div>
  );
}
