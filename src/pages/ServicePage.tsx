import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ServiceFilter from '../components/service/ServiceFilter';
import ServiceTable from '../components/service/ServiceTable';
import { useConvertExcel } from '../hooks/useConvertExcel';
import useProducts from '../query/useProducts';
import useService from '../query/useService';
import styles from './servicePage.module.scss';

export default function ServicePage() {
  const { parcelList } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const startDate = searchParams.get('start');
  const endDate = searchParams.get('end');
  const selectedProduct = searchParams.get('products');
  const status = searchParams.get('parcel');

  const { totalPages, serviceList } = useService(
    Number(page),
    `[${startDate},${endDate}]`,
    selectedProduct === '전체' ? null : selectedProduct,
    status === '전체' ? null : status
  );

  const { excelList } = useService(
    0,
    `[${startDate},${endDate}]`,
    selectedProduct === '전체' ? null : selectedProduct,
    status === '전체' ? null : status
  );
  const excel = useConvertExcel(excelList);

  useEffect(() => {
    if (parcelList?.length) {
      searchParams.set('products', parcelList[0]);
      setSearchParams(searchParams);
    }
  }, []);

  return (
    <div id={styles.Service}>
      <h1 className={styles.title}>배송관리</h1>
      <div className={styles.service_container}>
        <ServiceFilter nameList={parcelList} />
        <p className={styles.filter_letter}>
          <strong>
            {startDate}~{endDate}{' '}
          </strong>
          기간 동안 <strong>'{selectedProduct}'</strong> 상품에 대한{' '}
          <strong>배송상태({status})</strong>의 내역입니다.
        </p>
        <ServiceTable cnt={totalPages} list={serviceList} excel={excel} />
      </div>
    </div>
  );
}
