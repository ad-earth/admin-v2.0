import type { Dispatch, SetStateAction } from 'react';
import { AD_HEADS_LIST } from '../../constants';
import Button from '../../elements/Button';
import TableHead from '../../elements/TableHead';
import useModal from '../../hooks/useModal';
import type { IAdProductSet } from '../../shared/types/types';
import styles from './adSetTable.module.scss';

type TProps = {
  product: string;
  productNum: number;
  prodList: IAdProductSet[];
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
};

export default function AdSetTable(props: TProps) {
  const {
    product,
    productNum,
    prodList = [],
    checkedItems,
    setCheckedItems,
  } = props;
  const { showModal } = useModal();

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

  const changeKeyword = (item: IAdProductSet) => {
    showModal({
      modalType: 'PostAdModal',
      modalProps: {
        title: '광고수정',
        product: product,
        productNum: productNum,
        data: item,
      },
    });
  };
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
                  <td>{item.k_Level === 5 ? '-' : item.k_Level} 위</td>
                  <td>{item.k_Cost.toLocaleString('ko-KR')} 원</td>
                  <td>{item.k_Click.toLocaleString('ko-KR')} 회</td>
                  <td>{item.clickCost.toLocaleString('ko-KR')} 원</td>
                  <td>{item.k_Status ? '노출' : '미노출'}</td>
                  <td className={styles.hover}>
                    <Button
                      styleClass="xsmall_gray"
                      onClick={() => changeKeyword(item)}
                    >
                      수정
                    </Button>
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
