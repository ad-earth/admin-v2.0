import { Tooltip } from '@mui/material';
import { CSVLink } from 'react-csv';
import toast from 'react-hot-toast';
import { EXCEL_HEAD_LIST, SERVICE_HEAD_LIST } from '../../constants';
import Button from '../../elements/Button';
import Pagination from '../../elements/Pagination';
import TableHead from '../../elements/TableHead';
import type { ExcelType } from '../../hooks/useConvertExcel';
import useServiceCheck from '../../hooks/useServiceCheck';
import useService from '../../query/useService';
import type { IServiceList } from '../../shared/types/types';
import styles from './serviceTable.module.scss';
interface IProps {
  cnt: number;
  list: IServiceList[];
  excel: ExcelType[];
}

export default function ServiceTable({ cnt, list, excel }: IProps) {
  const {
    checkSingleItem,
    checkAllItems,
    checkNothing,
    checkedItems,
    confirmList,
  } = useServiceCheck();
  const handleSingleChecked = (
    checked: boolean,
    id: number,
    o_No: number,
    p_No: number
  ) => checkSingleItem(checked, id, o_No, p_No);
  const AllCheckedHandler = (checked: boolean) => checkAllItems(checked, list);

  const { confirmService } = useService();
  const handleConfirm = () => {
    if (checkedItems.length > 0) {
      confirmService.mutate(
        { confirmList },
        {
          onSuccess: () => checkNothing(),
        }
      );
    } else return toast.error('주문 확정하실 상품을 먼저 선택해주세요.');
  };

  return (
    <div id={styles.Service_table}>
      <div className={styles.btn_wrapper}>
        <Button
          styleClass="small_gray"
          text="주문확정"
          onClick={handleConfirm}
        />
        <Button styleClass="border_img">
          <CSVLink
            headers={EXCEL_HEAD_LIST}
            data={excel}
            filename="order_list.csv"
            target="_blank"
            className={styles.excel}
          >
            <img
              src={process.env.PUBLIC_URL + './assets/download.png'}
              alt="download"
            />
            <p>파일 내려받기</p>
          </CSVLink>
        </Button>
      </div>
      <div className={styles.service_table}>
        <table>
          <TableHead
            headList={SERVICE_HEAD_LIST}
            isCheck={true}
            dataLength={list?.length}
            checkedLength={checkedItems.length}
            AllCheckedHandler={e => AllCheckedHandler(e.target.checked)}
          />
          <tbody>
            {list?.map((val: IServiceList, i: number) => (
              <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(val.id) ? true : false}
                    onChange={e =>
                      handleSingleChecked(
                        e.target.checked,
                        val.id,
                        val.o_No,
                        val.p_No
                      )
                    }
                  />
                </td>
                <td>{val.id}</td>
                <td>{val.o_No}</td>
                <td>{val.p_No}</td>
                <Tooltip
                  title={val.p_Option.map(option => {
                    return `${option[0] ? option[0] : ''}${
                      option[2] ? option[2] : ''
                    } (수량:${option[4] ? option[4] : ''}) `;
                  })}
                  arrow
                >
                  <td>{val.p_Name}</td>
                </Tooltip>
                <td>{val.p_Cnt}</td>
                <td>{val.u_Id}</td>
                <td>{val.d_Name}</td>
                <td>{val.d_Address2}</td>
                <td>{val.d_Phone}</td>
                <td>{val.d_Memo}</td>
                <td>{val.o_Date}</td>
                <td>{val.o_Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <Pagination pageCnt={cnt} />
      </div>
    </div>
  );
}
