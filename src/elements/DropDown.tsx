import { InputLabel, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import styles from './dropDown.module.scss';

export interface IProps {
  id?: string;
  itemList: (string | number)[];
  placeholder?: string;
  selected?: string;
  setSelected?: (val: string) => void;
  onChange?: () => void;
}

const ITEM_HEIGHT = 40;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5,
      width: 250,
    },
  },
};

export function MediumDropdown(props: IProps) {
  return (
    <FormControl>
      <InputLabel id={props.id} size="small">
        {props.placeholder}
      </InputLabel>
      <Select
        className={styles.select}
        labelId={props.id}
        value={props.selected}
        MenuProps={MenuProps}
        input={<OutlinedInput label={props.placeholder} />}
        onChange={(e: SelectChangeEvent<string>) =>
          props.setSelected && props.setSelected(e.target.value)
        }
      >
        {props.itemList.map((item, idx) => (
          <MenuItem selected className={styles.menuItem} key={idx} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
