import type { ChangeEvent } from 'react';
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import useMinDate from '../hooks/useMinDate';
import styles from './datePicker.module.scss';

export default function DatePicker() {
  const minDate = useMinDate();
  const today = useMemo(() => new Date().toISOString().substring(0, 10), []);

  const [searchParams, setSearchParams] = useSearchParams({
    start: minDate,
    end: today,
  });
  const startDate = searchParams.get('start');
  const endDate = searchParams.get('end');

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
