import CricketScorecard from "./CricketScorecard";
import squads from "./squads";

export default function App() {
  return (
    <div className="App">
      <CricketScorecard
        battingTeamName="IND"
        batterList={squads["IND"]}
        bowlingTeamName="AUS"
      />
    </div>
  );
}
