import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useOffsetDate from './useOffsetDate';

const useTerm = () => {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('term');
  const [termNumber, setTermNumber] = useState(3);

  const offsetDate = useOffsetDate();

  useEffect(() => {
    term === '3개월'
      ? setTermNumber(3)
      : term === '2개월'
      ? setTermNumber(2)
      : setTermNumber(1);
  }, [term]);

  const startDate = useMemo(() => {
    return new Date(offsetDate.setMonth(offsetDate.getMonth() - termNumber))
      .toISOString()
      .substring(0, 10);
  }, [offsetDate, termNumber]);

  const endDate = useMemo(() => new Date().toISOString().substring(0, 10), []);

  return { startDate, endDate };
};

export default useTerm;
