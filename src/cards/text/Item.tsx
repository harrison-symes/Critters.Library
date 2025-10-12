import { Tooltip } from "@mui/material";

const Item = (props: { plural?: boolean }) => {
  return (
    <Tooltip
      title={
        <span>
          <b>Item:</b>
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>🎒Item{props.plural && "s"}</b>
    </Tooltip>
  );
};

export default Item;
