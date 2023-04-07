import ReactApexChart from 'react-apexcharts';
import useViewport from '../../hooks/useViewport';
import useMainDashboard from '../../query/useMainDashboard';
import styles from './adSummary.module.scss';

export default function AdSummary() {
  const { isLoading, monthData, adCostData, salesCostData } =
    useMainDashboard();

  const [viewport] = useViewport();

  const seriesData = [
    { name: '광고비', data: adCostData },
    { name: '매출', data: salesCostData },
  ];
  let optionData = {
    chart: { width: 400, background: 'transparent' },
    colors: ['#4e60ff', '#009667'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded',
      },
    },
    dataLabels: { enabled: false },
    xaxis: { categories: monthData },
    fill: { opacity: 1 },
  };

  if (isLoading) return <>...isLoading</>;
  return (
    <article className={styles.base}>
      <h3 className={styles.title}>광고 요약 보고서</h3>
      <p className={styles.subTitle}>최근 3개월 광고비/매출</p>
      <div className={styles.adChart}>
        <ReactApexChart
          series={seriesData}
          options={optionData}
          type="bar"
          width={viewport / 4}
          height={280}
        />
      </div>
    </article>
  );
}
