import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 20,
  padding: 0,
  display: 'flex',
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#4e60ff' : '#4e60ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 32 / 2,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
  },
}));
