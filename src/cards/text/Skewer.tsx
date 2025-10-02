import { Tooltip } from "@mui/material";

const Skewer = () => {
  return (
    <Tooltip
      title={
        <span>
          <b>Skewer:</b>
          <br /> Place a card onto the top of your deck.
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>Skewer</b>
    </Tooltip>
  );
};

export default Skewer;
