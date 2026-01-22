import { Tooltip } from "@mui/material";

const Shuffle = () => {
  return (
    <Tooltip
      title={
        <span>
          <b>Shuffle:</b> <br />
          Shuffle a card into your deck (from discard pile unless otherwise
          specified).
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>Shuffle</b>
    </Tooltip>
  );
};

export default Shuffle;
