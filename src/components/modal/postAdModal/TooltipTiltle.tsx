import { Tooltip } from '@mui/material';
import React from 'react';
import styles from './tooltipTiltle.module.scss';

type TProps = {
  tilte: string;
  tooltipTilte: string;
  children?: React.ReactNode;
};

export default function TiltleTooltip(props: TProps) {
  const { tilte, tooltipTilte, children } = props;
  return (
    <div className={styles.info}>
      <div className={styles.infoTilte}>
        <h5>{tilte}</h5>
        <Tooltip title={tooltipTilte} placement="top" arrow>
          <img
            src={process.env.PUBLIC_URL + 'assets/icon/info.svg'}
            alt="infoIcon"
          />
        </Tooltip>
      </div>
      {children}
    </div>
  );
}
