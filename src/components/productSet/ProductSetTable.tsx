import { Stack } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { SET_HEADS_LIST } from '../../constants';
import TableHead from '../../elements/TableHead';
import useModal from '../../hooks/useModal';
import type { IProductSetList } from '../../shared/types/types';
import styles from './productSetTable.module.scss';
import { AntSwitch } from './tableSwitch.style';

type TProps = {
  prodList: IProductSetList[];
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
};

export default function ProductSetTable(props: TProps) {
  const { prodList = [], checkedItems, setCheckedItems } = props;

  const openLink = (status: boolean, prodNum: number) => {
    let pageUrl = `https://www.adearth.shop/detail/${prodNum}`;
    status
      ? (document.location.href = pageUrl)
      : toast.error('노출되지 않은 상품입니다.');
  };

  const { showModal } = useModal();

  const changeStatus = (p_No: number) => {
    showModal({
      modalType: 'ProductStatusModal',
      modalProps: {
        title: '상품 노출을 변경하시겠습니까?',
        no: p_No,
      },
    });
  };

  const SingleCheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target.checked
      ? setCheckedItems([...checkedItems, Number(target.value)])
      : setCheckedItems(checkedItems.filter(el => el !== Number(target.value)));
  };

  const AllCheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target.checked
      ? setCheckedItems(prodList.map(el => el.p_No))
      : setCheckedItems([]);
  };

  return (
    <div className={styles.base}>
      <table className={styles.table}>
        <TableHead
          headList={SET_HEADS_LIST}
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
                      value={item.p_No}
                      checked={checkedItems.includes(item.p_No) ? true : false}
                      onChange={SingleCheckedHandler}
                    />
                  </td>
                  <td>{item.id}</td>
                  <td className={styles.hover}>
                    <a
                      href="#!"
                      rel="noopener noreferer nofollow noreferrer"
                      onClick={() => openLink(item.p_Status, item.p_No)}
                    >
                      {item.p_No}
                    </a>
                  </td>
                  <td>{item.p_Category}</td>
                  <td className={styles.hover}>
                    <a
                      href="#!"
                      rel="noopener noreferer nofollow noreferrer"
                      onClick={() => openLink(item.p_Status, item.p_No)}
                    >
                      {item.p_Name}
                    </a>
                  </td>
                  <td>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent="left"
                    >
                      <AntSwitch
                        checked={item.p_Status}
                        onClick={() => changeStatus(item.p_No)}
                      />
                    </Stack>
                  </td>
                  <td className={(styles.hover, styles.link)}>
                    <Link
                      to="/postProd"
                      data-value={item.p_No}
                      state={{
                        isProd: true,
                        p_Number: item.p_No,
                      }}
                    >
                      수정
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr className={styles.none}>
              <td>등록된 상품이 없습니다.</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
