import { Tooltip } from "@mui/material";

const Treat = (props: { plural?: boolean }) => {
  return (
    <Tooltip
      title={
        <span>
          <b>Treat:</b>
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>🧁Treat{props.plural && "s"}</b>
    </Tooltip>
  );
};

export default Treat;
