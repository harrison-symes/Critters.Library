import { Tooltip } from "@mui/material";

const Sleepy = () => {
  return (
    <Tooltip
      title={
        <span>
          <b>💤Sleepy:</b> <br />
          When a Critter has 💤Sleepy equal to their 💚Energy, they are{" "}
          <b>Exhausted</b>. <br />
          <b>Exhausted</b> Critters are placed in their owner's discard pile.
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>💤Sleepy</b>
    </Tooltip>
  );
};

export default Sleepy;
