import { Tooltip } from "@mui/material";

const Seed = (props: { plural?: boolean }) => {
  return (
    <Tooltip
      title={
        <span>
          <b>Seed:</b>
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>🌱Seed{props.plural && "s"}</b>
    </Tooltip>
  );
};

export default Seed;
