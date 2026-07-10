import { Tooltip } from "@mui/material";

const Critter = (props: {
  plural?: boolean;
  ownership?: boolean;
  whittle?: boolean;
}) => {
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
      <b>
        🐾{props.whittle && "Whittle "}Critter{props.plural && "s"}
        {props.ownership && "'s"}
      </b>
    </Tooltip>
  );
};

export default Critter;
