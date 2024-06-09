import { useState } from "react";
import Bowler from "./Bowler";
import Controls from "./Controls";
import BattingScorecard from "./BattingScorecard";

export default function CricketScorecard({ battingTeamName, bowlingTeamName }) {
  const [ballsFaced, setBallsFaced] = useState([]);
  const [ballsBowled, setBallsBowled] = useState([]);
  return (
    <div className="CricketScorecard">
      <BattingScorecard
        battingTeamName={battingTeamName}
        ballsFaced={ballsFaced}
      />
      <Bowler bowlerName={bowlingTeamName} ballsBowled={ballsBowled} />
      <Controls setBallsFaced={setBallsFaced} setBallsBowled={setBallsBowled} />
    </div>
  );
}
