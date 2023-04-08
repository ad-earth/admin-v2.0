import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getReport } from '../shared/api/apis';
import type { IReportResponse } from '../shared/types/types';

const useReport = (date: string, productNumber: number) => {
  const { data } = useQuery<AxiosResponse<IReportResponse>, AxiosError>(
    [queryKeys.REPORT, date, productNumber],
    () => getReport(date, productNumber),
    {
      refetchOnWindowFocus: false,
      enabled: !!date || !!productNumber,
    }
  );

  const dataList = useMemo(() => data?.data.list, [data]);

  return { dataList };
};

export default useReport;
