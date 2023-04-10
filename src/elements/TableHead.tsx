import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import styles from './tableHead.module.scss';

interface IProps {
  headList: THead[];
  isCheck: boolean;
  dataLenght?: number;
  checkedLength?: number;
  AllCheckedHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type THead = {
  id: number;
  val: string;
  tooltip?: string;
};

export default function TableHead({
  headList,
  isCheck,
  dataLenght,
  checkedLength,
  AllCheckedHandler,
}: IProps) {
  return (
    <thead className={styles.table_head}>
      <tr>
        {isCheck && (
          <th>
            <input
              type="checkbox"
              checked={checkedLength !== 0 && dataLenght === checkedLength}
              onChange={AllCheckedHandler}
            />
          </th>
        )}
        {headList.map(({ id, val, tooltip }) => (
          <th key={id}>
            <div className={styles.infoWrapper}>
              {val}
              {tooltip && (
                <Tooltip title={tooltip} placement="top" arrow>
                  <InfoIcon />
                </Tooltip>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
