import { useState } from 'react';
import { useMinDate, useToday } from '../hooks/useDate';
import styles from './datePicker.module.scss';

export default function DatePicker() {
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();

  const minDate = useMinDate();
  const today = useToday();

  const onStartChange = (e: any) => {
    setSelectedStartDate(e.target.value);
    setSelectedEndDate(e.target.value);
  };
  const onEndChange = (e: any) => {
    setSelectedEndDate(e.target.value);
  };

  return (
    <div id={styles.Date_picker}>
      <input
        id={styles.start}
        type="date"
        value={selectedStartDate}
        min={minDate}
        max={selectedEndDate}
        onChange={onStartChange}
      />
      <img
        src={process.env.PUBLIC_URL + './assets/rightarrow.png'}
        alt="arrowIcon"
      />
      <input
        id={styles.end}
        className={styles.date}
        type="date"
        value={selectedEndDate}
        min={selectedStartDate}
        max={today}
        onChange={onEndChange}
      />
    </div>
  );
}
