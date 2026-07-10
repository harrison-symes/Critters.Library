import { Tooltip } from "@mui/material";

interface IProps {
  count?: number;
}

const Dive = (props: IProps) => {
  const count = props.count ?? 1

  return (
    <Tooltip
      title={
        <span>
          <b>Dive:</b>
          <br />
          Draw a card from the bottom of your deck.
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <span>
        <b>Dive</b> for {count === 1 ? "a" : count} card{count > 1 ? "s" : ""}
      </span>
    </Tooltip>
  );
};

export default Dive;
