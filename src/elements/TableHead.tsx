import styles from './tableHead.module.scss';

interface IProps {
  headList: string[];
}

export default function TableHead({ headList }: IProps) {
  return (
    <thead className={styles.table_head}>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        {headList.map((item, idx) => (
          <th key={idx}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
