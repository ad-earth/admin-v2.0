import { useMemo } from 'react';
import Chart from 'react-apexcharts';
import { useSearchParams } from 'react-router-dom';
import useTerm from '../../hooks/useTerm';
import type { IList } from '../../shared/types/types';
import styles from './adChart.module.scss';

type TProps = {
  dataList: IList[];
};

export default function AdChart({ dataList }: TProps) {
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get('product');
  const { startDate, endDate } = useTerm();
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
      zoom: {
        enabled: false,
      },
    },
    yaxis: [
      {
        labels: {
          formatter: (val: number) => val.toFixed(0),
        },
        title: {
          text: '키워드 별 클릭 수',
        },
      },
      {
        labels: {
          formatter: (val: number) => val.toFixed(0),
        },
        opposite: true,
        title: {
          text: '키워드 별 전환 수',
        },
      },
    ],
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
        {selectedProduct !== 'undefined' && `"${selectedProduct}"`} 광고 키워드
        클릭 수 & 전환 수 {startDate && `(${startDate} ~ ${endDate})`}
      </h3>
      <div className={styles.chartContainer}>
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="300"
        />
      </div>
    </div>
  );
}
