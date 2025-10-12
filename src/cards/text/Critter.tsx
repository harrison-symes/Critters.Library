import { Tooltip } from "@mui/material";

const Critter = (props: { plural?: boolean }) => {
  return (
    <Tooltip
      title={
        <span>
          <b>Critter:</b>
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>🐾Critter{props.plural && "s"}</b>
    </Tooltip>
  );
};

export default Critter;
