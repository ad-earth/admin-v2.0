import { useMemo } from 'react';
import Chart from 'react-apexcharts';
import { useSearchParams } from 'react-router-dom';
import type { IList } from '../../shared/types/types';
import styles from './adChart.module.scss';

type TProps = {
  dataList: IList[];
};

export default function AdChart({ dataList }: TProps) {
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get('products');
  const startDate = searchParams.get('start');
  const endDate = searchParams.get('end');

  const { keywordList, clickList, conversionList } = useMemo(
    () => ({
      keywordList: dataList?.map(el => el.keyword),
      clickList: dataList?.map(el => el.k_Click),
      conversionList: dataList?.map(el => el.k_Trans),
    }),
    [dataList]
  );

  let options = {
    xaxis: {
      categories: keywordList,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  let series = [
    {
      name: '키워드 별 클릭 수',
      data: clickList,
    },
    {
      name: '키워드 별 전환 수',
      data: conversionList,
    },
  ];

  return (
    <div id={styles.container}>
      <h3>
        "{selectedProduct}" 광고 키워드 클릭 수 & 전환 수 ({startDate} ~{' '}
        {endDate})
      </h3>
      <Chart
        options={options}
        series={series}
        type="area"
        width="1000px"
        height="300"
      />
    </div>
  );
}
