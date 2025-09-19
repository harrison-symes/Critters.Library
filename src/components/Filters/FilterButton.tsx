import { Button } from "@mui/material";

interface IFilterButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
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
    >
      {props.text}
    </Button>
  );
};

export default FilterButton;
