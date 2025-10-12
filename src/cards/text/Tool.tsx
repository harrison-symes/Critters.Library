import { Tooltip } from "@mui/material";

const Tool = (props: { plural?: boolean }) => {
  return (
    <Tooltip
      title={
        <span>
          <b>Tool:</b>
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>🛠️Tool{props.plural && "s"}</b>
    </Tooltip>
  );
};

export default Tool;
