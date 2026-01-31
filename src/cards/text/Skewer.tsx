import { Tooltip } from "@mui/material";

const Skewer = ({ plural }: { plural?: boolean }) => {
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
      <b>Skewer{plural ? "s" : ""}</b>
    </Tooltip>
  );
};

export default Skewer;
