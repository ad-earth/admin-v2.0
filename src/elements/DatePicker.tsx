import type { ChangeEvent } from 'react';
import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import useMinDate from '../hooks/useMinDate';
import styles from './datePicker.module.scss';

export default function DatePicker() {
  const [searchParams, setSearchParams] = useSearchParams();
  const startDate = searchParams.get('start');
  const endDate = searchParams.get('end');

  const minDate = useMinDate();

  const today = useMemo(() => new Date().toISOString().substring(0, 10), []);

  useEffect(() => {
    searchParams.set('start', minDate);
    searchParams.set('end', today);
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
        value={startDate}
        min={minDate}
        max={endDate}
        onChange={handleStartDate}
      />
      →
      <input
        type="date"
        className={styles.date}
        value={endDate}
        min={startDate}
        max={today}
        onChange={handleEndDate}
      />
    </div>
  );
}
