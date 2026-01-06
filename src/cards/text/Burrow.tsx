import { Tooltip } from "@mui/material";

const Burrow = () => {
  return (
    <Tooltip
      title={
        <span>
          <b>Burrow:</b>
          <br /> Place a card onto the bottom of your deck.
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>Burrow</b>
    </Tooltip>
  );
};

export default Burrow;
