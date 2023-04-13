import type { Dispatch, SetStateAction } from 'react';
import { AD_HEADS_LIST } from '../../constants';
import TableHead from '../../elements/TableHead';
import type { IAdProductSet } from '../../shared/types/types';
import styles from './adSetTabel.module.scss';

type TProps = {
  prodList: IAdProductSet[];
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
};

export default function AdSetTabel(props: TProps) {
  const { prodList = [], checkedItems, setCheckedItems } = props;

  const SingleCheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target.checked
      ? setCheckedItems([...checkedItems, Number(target.value)])
      : setCheckedItems(checkedItems.filter(el => el !== Number(target.value)));
  };

  const AllCheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target.checked
      ? setCheckedItems(prodList.map(el => el.k_No))
      : setCheckedItems([]);
  };

  const changeKeyword = () => {};
  return (
    <div className={styles.base}>
      <table className={styles.table}>
        <TableHead
          headList={AD_HEADS_LIST}
          isCheck={true}
          dataLength={prodList.length}
          checkedLength={checkedItems.length}
          AllCheckedHandler={AllCheckedHandler}
        />
        {prodList.length !== 0 ? (
          <tbody>
            {prodList?.map((item, i: number) => {
              return (
                <tr key={i}>
                  <td>
                    <input
                      id="check"
                      type="checkbox"
                      className={styles.checkbox}
                      value={item.k_No}
                      checked={checkedItems.includes(item.k_No) ? true : false}
                      onChange={SingleCheckedHandler}
                    />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.keyword}</td>
                  <td>{item.k_Level === 5 ? '-' : item.k_Level}</td>
                  <td>{item.k_Cost}</td>
                  <td>{item.k_Click}</td>
                  <td>{item.clickCost}</td>
                  <td>{item.k_Status ? '노출' : '미노출'}</td>
                  <td className={(styles.hover, styles.link)}>
                    <button value={i} onClick={changeKeyword}>
                      수정
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr className={styles.none}>
              <td>등록된 키워드가 없습니다.</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
