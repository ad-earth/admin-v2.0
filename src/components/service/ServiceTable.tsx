import { SERVICE_HEAD_LIST } from '../../constants';
import Button from '../../elements/Button';
import Pagination from '../../elements/Pagination';
import TableHead from '../../elements/TableHead';
import type { IServiceList, IServiceResponse } from '../../shared/types/types';
import styles from './serviceTable.module.scss';

export default function ServiceTable({ cnt, list }: IServiceResponse) {
  return (
    <div id={styles.Service_table}>
      <div className={styles.btn_wrapper}>
        <Button styleClass="small_gray" text="주문확정" />
        <Button styleClass="border_img">
          <img
            src={process.env.PUBLIC_URL + './assets/download.png'}
            alt="download"
          />
          <p>파일 내려받기</p>
        </Button>
      </div>
      <div className={styles.service_table}>
        <table>
          <TableHead headList={SERVICE_HEAD_LIST} isCheck={true} />
          <tbody>
            {list?.map((val: IServiceList) => (
              <tr key={val.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{val.id}</td>
                <td>{val.o_No}</td>
                <td>{val.p_No}</td>
                <td>{val.p_Name}</td>
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
