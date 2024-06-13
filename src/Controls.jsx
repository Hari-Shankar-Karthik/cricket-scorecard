import ControlButton from "./ControlButton";

export default function Controls({
  ballRecord,
  setBallRecord,
  activePlayers,
  setActivePlayers,
}) {
  const { strikeBatter, nonStrikeBatter } = activePlayers;
  const ballOutcomes = [1, 2, 3, 4, 6];
  const addRuns = (ball) => {
    setBallRecord((ballRecord) => [
      ...ballRecord,
      { batter: strikeBatter, runs: ball },
    ]);
    const isEndOfOver = ballRecord.length % 6 === 5;
    if ((ball % 2 === 1) ^ isEndOfOver) {
      setActivePlayers((activePlayers) => ({
        ...activePlayers,
        strikeBatter: activePlayers.nonStrikeBatter,
        nonStrikeBatter: activePlayers.strikeBatter,
      }));
    }
  };
  return (
    <div className="Controls">
      <div className="controls-header">CONTROLS</div>
      <div className="control-button-display">
        {ballOutcomes.map((ball) => (
          <ControlButton
            buttonText={`+${ball}`}
            buttonOnClick={() => addRuns(ball)}
          />
        ))}
      </div>
    </div>
  );
}
