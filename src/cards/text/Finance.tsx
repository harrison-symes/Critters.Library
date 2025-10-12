import { Tooltip } from "@mui/material";

const Finance = (props: { plural?: boolean }) => {
  return (
    <Tooltip
      title={
        <span>
          <b>Finance:</b>
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>🏦Finance{props.plural && "s"}</b>
    </Tooltip>
  );
};

export default Finance;
