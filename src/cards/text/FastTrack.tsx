import { Tooltip } from "@mui/material";

const FastTrack = () => {
  return (
    <Tooltip
      title={
        <span>
          <b>Fast-track:</b> <br />
          Shuffle a card into your deck (default from discard pile).
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>Fast-track</b>
    </Tooltip>
  );
};

export default FastTrack;
