import { Tooltip } from "@mui/material";

const Sunlight = () => {
  return (
    <Tooltip
      title={
        <span>
          <b>Sunlight:</b>
          <br />
          Planted Seeds gain 1 Sunlight at the end of your turn. <br /> Seed
          harvest yield is increased by the Sunlight accumulated.
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>☀️Sunlight</b>
    </Tooltip>
  );
};

export default Sunlight;
