import { Tooltip } from "@mui/material";

const Shuffle = ({ plural }: { plural?: boolean }) => {
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
      <b>Shuffle{plural ? "s" : ""}</b>
    </Tooltip>
  );
};

export default Shuffle;
