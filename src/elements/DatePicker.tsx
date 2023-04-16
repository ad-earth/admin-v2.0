import { useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDate from '../hooks/useDate';
import styles from './datePicker.module.scss';

export default function DatePicker() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { minTime } = useDate();
  const { nowTime } = useDate();
  const minDate = minTime();
  const today = nowTime();
  const startDate = searchParams.get('start');
  const endDate = searchParams.get('end');

  useEffect(() => {
    searchParams.set('start', startDate);
    searchParams.set('end', endDate);
    setSearchParams(searchParams);
  }, []);

  const handleStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    searchParams.set('start', e.target.value);
    setSearchParams(searchParams);
  };

  const handleEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    searchParams.set('end', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div id={styles.container}>
      <input
        type="date"
        className={styles.date}
        defaultValue={startDate}
        min={minDate}
        max={endDate}
        onChange={handleStartDate}
      />
      →
      <input
        type="date"
        className={styles.date}
        defaultValue={endDate}
        min={startDate}
        max={today}
        onChange={handleEndDate}
      />
    </div>
  );
}
