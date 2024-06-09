import { useState } from "react";
import Batter from "./Batter";
import Bowler from "./Bowler";
import Controls from "./Controls";

export default function CricketScorecard({ battingTeamName, bowlingTeamName }) {
  const [ballsFaced, setBallsFaced] = useState([]);
  const [ballsBowled, setBallsBowled] = useState([]);
  return (
    <div className="CricketScorecard">
      <Batter batterName={battingTeamName} ballsFaced={ballsFaced} />
      <Bowler bowlerName={bowlingTeamName} ballsBowled={ballsBowled} />
      <Controls setBallsFaced={setBallsFaced} setBallsBowled={setBallsBowled} />
    </div>
  );
}
