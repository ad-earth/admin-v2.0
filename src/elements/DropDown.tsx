import { InputLabel, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import { useSearchParams } from 'react-router-dom';
import styles from './dropDown.module.scss';

export interface IProps {
  id?: string;
  itemList: (string | number)[];
  placeholder?: string;
  queryKey: string;
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
  const [searchParams, setSearchParams] = useSearchParams();

  function getFilterParams(params: string): string | null {
    return searchParams.get(params);
  }
  const setParams = (queryKey: string, value: string) => {
    searchParams.set(queryKey, value);
    getFilterParams('page') && searchParams.set('page', '1');
    setSearchParams(searchParams);
  };

  const selected = searchParams.get(props.queryKey) || '';

  return (
    <FormControl>
      <InputLabel id={props.id} size="small">
        {props.placeholder}
      </InputLabel>
      <Select
        className={styles.select}
        labelId={props.id}
        value={selected}
        defaultValue={selected}
        MenuProps={MenuProps}
        input={<OutlinedInput label={props.placeholder} />}
        onChange={(e: SelectChangeEvent<string>) =>
          setParams(props.queryKey, e.target.value)
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

export interface IGeneralProps {
  id?: string;
  itemList: (string | number)[];
  placeholder?: string;
  selected?: string;
  setSelected?: (val: string) => void;
  onChange?: () => void;
}

export function GeneralDropdown(props: IGeneralProps) {
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
