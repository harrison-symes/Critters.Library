import { Tooltip } from "@mui/material";
import Critter from "./Critter";

const TrickOrTreat = () => {
  return (
    <Tooltip
      title={
        <span>
          <b>Trick or Treat:</b>
          <br />
          Roll the 3 dice. <br />
          If any of the white die match the yellow die, gain the 3 crops shown
          on the dice. <br />
          If neither match, equip a mask from the <b>Market</b> to one of your{" "}
          <Critter plural />
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>Trick or Treat</b>
    </Tooltip>
  );
};

export default TrickOrTreat;
