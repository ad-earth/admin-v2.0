import React from 'react';
import { ADHEADS } from '../../constants';
import TableHead from '../../elements/TableHead';
import type { IList } from '../../shared/types/types';
import styles from './adTable.module.scss';

type TProps = {
  dataList: IList[];
};

export default function AdTable({ dataList }: TProps) {
  return (
    <table id={styles.table}>
      <TableHead headList={ADHEADS} isCheck={false} />
      {dataList?.length ? (
        <tbody>
          {dataList?.map((data, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{data.keyword}</td>
              <td>{data.k_Click}</td>
              <td>
                {Math.round(data.k_Cost / data.k_Click).toLocaleString()}원
              </td>
              <td>{data.k_Cost.toLocaleString()}원</td>
              <td>{data.k_Trans}</td>
              <td>{Math.round((data.k_Trans / data.k_Click) * 100)}%</td>
              <td>{data.p_Price.toLocaleString()}원</td>
              <td>{Math.round((data.p_Price / data.k_Cost) * 100)}%</td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td className={styles.nodata}>등록된 광고 키워드가 없습니다.</td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
