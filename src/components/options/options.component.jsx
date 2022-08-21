import { ReactComponent as Backspace } from "../../assets/backspace.svg";
import Button from "../buttons/buttons.component";
import "./options.styles.css";

const Options = () => {
  return (
    <div className="options-container">
      <div className="back-option">
        <Backspace />
        <span>Back</span>
      </div>

      <div>
        <Button buttonType={"inverted"}>CONTINUE SHOPPING</Button>
        <Button>PROCEED PAYMENT</Button>
      </div>
    </div>
  );
};

export default Options;
