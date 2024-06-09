export default function ControlButton({ buttonText, buttonOnClick }) {
  return (
    <button className="ControlButton" onClick={buttonOnClick}>
      {buttonText}
    </button>
  );
}
