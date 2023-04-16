import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdChart from '../components/report/AdChart';
import AdTable from '../components/report/AdTable';
import Filter from '../components/report/Filter';
import useTerm from '../hooks/useTerm';
import useProducts from '../query/useProducts';
import useReport from '../query/useReport';
import type { IProduct } from '../shared/types/types';
import styles from './reportPage.module.scss';

export default function ReportPage() {
  const { productList } = useProducts();
  const nameList = useMemo(
    () => productList?.map((el: IProduct) => el.p_Name),
    [productList]
  );
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get('product');
  const { startDate, endDate } = useTerm();

  const productNumber = useMemo(
    () =>
      selectedProduct !== 'undefined'
        ? productList?.filter(
            (el: IProduct) => el.p_Name === selectedProduct
          )[0].p_No
        : 0,
    [productList, selectedProduct]
  );

  const { dataList } = useReport(`[${startDate},${endDate}]`, productNumber);

  return (
    <div id={styles.container}>
      <h1 className={styles.title}>광고보고서</h1>
      <Filter nameList={nameList} />
      <AdChart dataList={dataList} />
      <AdTable dataList={dataList} />
    </div>
  );
}
