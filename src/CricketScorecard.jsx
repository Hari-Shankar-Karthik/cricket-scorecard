import { useState } from "react";
import BattingScorecard from "./BattingScorecard";
import BowlingScorecard from "./BowlingScorecard";
import Controls from "./Controls";
import getStats from "./getStats";

export default function CricketScorecard({
  battingTeamName,
  batterList,
  bowlingTeamName,
  bowlerList,
}) {
  // balls: [{batter, bowler, runs}]
  const [ballRecord, setBallRecord] = useState([]);
  const [activePlayers, setActivePlayers] = useState({
    strikeBatter: 0,
    nonStrikeBatter: 1,
    bowler: 10, // TODO: Allow changing this
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
        bowlerList={bowlerList}
        bowlingStats={bowlingStats}
        bowler={activePlayers.bowler}
      />
      <Controls
        ballRecord={ballRecord}
        setBallRecord={setBallRecord}
        activePlayers={activePlayers}
        setActivePlayers={setActivePlayers}
      />
    </div>
  );
}
