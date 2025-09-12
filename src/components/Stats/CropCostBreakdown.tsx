import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import { ICard, RESOURCE } from "../../models/cards.models";
import { medianSorted } from "./CostBarChart";

interface IProps {
  deck: ICard[];
}

const CropCostBreakdown = (props: IProps) => {
  const filterByCropType = (
    costsApples: boolean,
    costsBerries: boolean,
    costsCarrots: boolean
  ) => {
    return props.deck.filter((card) => {
      const { apples, berries, carrots } = card.cost;
      const appleMatch = costsApples ? apples > 0 : apples === 0;
      const berryMatch = costsBerries ? berries > 0 : berries === 0;
      const carrotMatch = costsCarrots ? carrots > 0 : carrots === 0;

      return appleMatch && berryMatch && carrotMatch;
    }).length;
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableCell>Crops in card cost</TableCell>
          <TableCell>Count</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>🍏</TableCell>
            <TableCell>{filterByCropType(true, false, false)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>🫐</TableCell>
            <TableCell>{filterByCropType(false, true, false)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>🥕</TableCell>
            <TableCell>{filterByCropType(false, false, true)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>🍏 🫐</TableCell>
            <TableCell>{filterByCropType(true, true, false)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>🍏 🥕</TableCell>
            <TableCell>{filterByCropType(true, false, true)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>🫐 🥕</TableCell>
            <TableCell>{filterByCropType(false, true, true)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>🍏 🫐 🥕</TableCell>
            <TableCell>{filterByCropType(true, true, true)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CropCostBreakdown;
