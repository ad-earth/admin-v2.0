import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useTerm = () => {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('term');
  const now = new Date();

  const startDate = useMemo(
    () =>
      term === '3개월'
        ? new Date(now.setMonth(now.getMonth() - 3))
            .toISOString()
            .substring(0, 10)
        : term === '2개월'
        ? new Date(now.setMonth(now.getMonth() - 2))
            .toISOString()
            .substring(0, 10)
        : term === '1개월'
        ? new Date(now.setMonth(now.getMonth() - 1))
            .toISOString()
            .substring(0, 10)
        : null,
    [term]
  );

  const endDate = useMemo(() => new Date().toISOString().substring(0, 10), []);

  return { startDate, endDate };
};

export default useTerm;
