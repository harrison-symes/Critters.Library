import { Tooltip } from "@mui/material";

interface IProps {
  count: number;
}

const Chew = (props: IProps) => {
  return (
    <Tooltip
      title={
        <span>
          <b>Chew X:</b>
          <br />
          Discard the top X cards of your deck.
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>Chew {props.count}</b>
    </Tooltip>
  );
};

export default Chew;
