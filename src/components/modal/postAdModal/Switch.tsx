import Stack from '@mui/material/Stack';
import type { Dispatch, SetStateAction } from 'react';
import type { IData } from './PostAdModal';
import { AntSwitch } from './Switch.style';

export interface SwitchType {
  k_Status: boolean;
  setDataList: Dispatch<SetStateAction<IData>>;
}

export default function Switch({ k_Status, setDataList }: SwitchType) {
  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    checked
      ? setDataList(prev => ({
          ...prev,
          k_Status: !prev.k_Status,
        }))
      : setDataList(prev => ({
          ...prev,
          k_Status: !prev.k_Status,
        }));
  };
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="left"
    >
      <AntSwitch checked={k_Status} onChange={handleSwitch} />
    </Stack>
  );
}
