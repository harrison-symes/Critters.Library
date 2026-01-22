import { Tooltip } from "@mui/material";

interface IProps {
  count?: number;
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
      <span>
        <b>Chew</b> {props.count ? props.count : ""}
        {props.count && (props.count !== 1 ? " cards" : " card")}
      </span>
    </Tooltip>
  );
};

export const Chewed = () => {
  return <span>chewed</span>;
};

export default Chew;
