import ControlButton from "./ControlButton";

export default function Controls({ setBallsFaced, setBallsBowled }) {
  const ballOutcomes = [0, 1, 2, 3, 4, 6];
  return (
    <div className="Controls">
      {ballOutcomes.map((ball) => (
        <ControlButton
          key={ball}
          buttonText={`+${ball}`}
          buttonOnClick={() => {
            setBallsFaced((ballsFaced) => [...ballsFaced, ball]);
            setBallsBowled((ballsBowled) => [...ballsBowled, ball]);
          }}
        />
      ))}
    </div>
  );
}
