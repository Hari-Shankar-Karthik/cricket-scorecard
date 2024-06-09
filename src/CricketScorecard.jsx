import Batter from "./Batter";
import Bowler from "./Bowler";
import Controls from "./Controls";

export default function CricketScorecard() {
  return (
    <div className="CricketScorecard">
      <Batter />
      <Bowler />
      <Controls />
    </div>
  );
}
