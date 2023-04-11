import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useTerm = () => {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('term');
  const now = new Date();

  let subtractNumber;
  const startDate = useMemo(() => {
    if (term === '3개월') subtractNumber = 3;
    else if (term === '2개월') subtractNumber = 2;
    else if (term === '1개월') subtractNumber = 1;
    else return null;
    return new Date(now.setMonth(now.getMonth() - subtractNumber))
      .toISOString()
      .substring(0, 10);
  }, [term]);

  const endDate = useMemo(() => new Date().toISOString().substring(0, 10), []);

  return { startDate, endDate };
};

export default useTerm;
