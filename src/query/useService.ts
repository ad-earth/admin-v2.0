import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getOrders } from './../shared/api/apis';
import type { IServiceResponse } from './../shared/types/types';

const useService = (
  page: number,
  date: string,
  product: string,
  status: string
) => {
  const { data: listData } = useQuery<AxiosResponse<IServiceResponse>, Error>(
    ['orderList', page, date, product, status],
    () => getOrders(page, '10', date, product, status),
    {
      refetchOnWindowFocus: false,
      enabled: !!date,
    }
  );
  const { totalPages, serviceList } = useMemo(
    () => ({
      totalPages: listData?.data.cnt,
      serviceList: listData?.data.list,
    }),
    [listData]
  );

  return { totalPages, serviceList };
};

export default useService;
