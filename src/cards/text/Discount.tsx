import { Tooltip } from "@mui/material";

const Discount = () => {
  return (
    <Tooltip
      title={
        <span>
          <b>Discount:</b>
          <br />
          Roll for a random crop. Every Farm card in the <b>Market</b> that
          still costs at least 1 of that crop has 1 of that crop token placed on
          it. The card's cost is reduced equal to the crop tokens placed on it.
        </span>
      }
      placement="top"
      className="tooltip"
    >
      <b>Discount</b>
    </Tooltip>
  );
};

export default Discount;
