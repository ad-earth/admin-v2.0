import styles from './tableHead.module.scss';

interface IProps {
  headList: string[];
  isCheck: boolean;
}

export default function TableHead({ headList, isCheck }: IProps) {
  return (
    <thead className={styles.table_head}>
      <tr>
        {isCheck && (
          <th>
            <input type="checkbox" />
          </th>
        )}

        {headList.map((item, idx) => (
          <th key={idx}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
