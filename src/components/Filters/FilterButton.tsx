import { Button } from "@mui/material";

interface IFilterButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
  futureCount?: number;
}

const FilterButton = (props: IFilterButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      size="small"
      variant={props.isActive ? "contained" : "outlined"}
      disableElevation
      disableRipple
      autoCapitalize="false"
      sx={{ textTransform: "none" }}
      disabled={props.futureCount === 0 && !props.isActive}
    >
      {props.text} ({props.futureCount})
    </Button>
  );
};

export default FilterButton;
