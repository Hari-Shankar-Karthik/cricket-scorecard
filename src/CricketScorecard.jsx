import { useState } from "react";
import BattingScorecard from "./BattingScorecard";
import BowlingScorecard from "./BowlingScorecard";
import Controls from "./Controls";
import getStats from "./getStats";

export default function CricketScorecard({
  battingTeamName,
  batterList,
  bowlingTeamName,
}) {
  // balls: [{batter, bowler, runs}]
  const [ballRecord, setBallRecord] = useState([]);
  const [activePlayers, setActivePlayers] = useState({
    strikeBatter: 0,
    nonStrikeBatter: 1,
    // bowler: null, // TODO
  });
  const { battingStats, bowlingStats } = getStats(ballRecord);
  return (
    <div className="CricketScorecard">
      <BattingScorecard
        battingTeamName={battingTeamName}
        batterList={batterList}
        battingStats={battingStats}
        strikeBatter={activePlayers.strikeBatter}
        nonStrikeBatter={activePlayers.nonStrikeBatter}
      />
      <BowlingScorecard
        bowlingTeamName={bowlingTeamName}
        bowlingStats={bowlingStats}
      />
      <Controls />
    </div>
  );
}
