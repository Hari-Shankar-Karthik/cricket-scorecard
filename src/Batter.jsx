import "./Batter.css";

export default function Batter({ batterName, batterStats, batterStatus }) {
  if (batterStatus === null) {
    return <div className="Batter">{batterName} - Yet to bat</div>;
  }
  const { runs, balls, fours, sixes } = batterStats;
  const strikeRate = balls === 0 ? 0 : runs / balls;
  return (
    <div className="Batter active">
      {batterName}
      {batterStatus && "*"} - {runs}({balls}) [4s {fours}, 6s {sixes}, SR{" "}
      {strikeRate}]
    </div>
  );
}
