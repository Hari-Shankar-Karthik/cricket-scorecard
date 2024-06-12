import { useState } from "react";
import Bowler from "./Bowler";
import Controls from "./Controls";
import BattingScorecard from "./BattingScorecard";

export default function CricketScorecard({
  battingTeamName,
  batterList,
  bowlingTeamName,
}) {
  const [activeBatter, setActiveBatter] = useState(0);
  const [ballsFaced, setBallsFaced] = useState(() =>
    Array.from({ length: 11 }, (_, i) => (i === activeBatter ? [] : null))
  );
  const [ballsBowled, setBallsBowled] = useState([]);
  const recordBall = (activeBatter) => {
    return (ball) => {
      setBallsFaced((ballsFaced) =>
        ballsFaced.map((balls, index) =>
          activeBatter === index ? [...balls, ball] : balls
        )
      );
      setBallsBowled((ballsBowled) => [...ballsBowled, ball]);
    };
  };
  return (
    <div className="CricketScorecard">
      <BattingScorecard
        battingTeamName={battingTeamName}
        batterList={batterList}
        ballsFaced={ballsFaced}
        activeBatter={activeBatter}
      />
      <Bowler bowlerName={bowlingTeamName} ballsBowled={ballsBowled} />
      <Controls buttonOnClick={recordBall(activeBatter)} />
    </div>
  );
}
