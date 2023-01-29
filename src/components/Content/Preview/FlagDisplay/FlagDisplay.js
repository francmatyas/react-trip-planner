import "./FlagDisplay.scss";
import FlagItem from "./FlagItem";

function FlagDisplay(props) {
  return (
    <div className="flag-display">
      <span className="flag-display__title">Countries</span>
      <div className="flag-display__container">
      <FlagItem {...props.countries[12]} />
      <FlagItem {...props.countries[150]} />
      <FlagItem {...props.countries[200]} />
      </div>
      
    </div>
  );
}

export default FlagDisplay;
