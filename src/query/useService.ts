import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getOrders, putOrderConfirm } from './../shared/api/apis';
import type { IServiceResponse, TError } from './../shared/types/types';
import { queryClient } from './../shared/utils/queryClient';

export type TList = {
  o_No: number;
  p_No: number;
};
export interface IConfirmList {
  confirmList: TList[];
}

const useService = (
  page?: number,
  date?: string,
  product?: string,
  status?: string
) => {
  const { data: listData } = useQuery<AxiosResponse<IServiceResponse>, Error>(
    [queryKeys.SERVICE, page, date, product, status],
    () => getOrders(page, '10', date, product, status),
    {
      refetchOnWindowFocus: false,
      enabled: !!page,
    }
  );
  const { totalPages, serviceList } = useMemo(
    () => ({
      totalPages: listData?.data.cnt,
      serviceList: listData?.data.list,
    }),
    [listData]
  );

  const { data: excelData } = useQuery<AxiosResponse<IServiceResponse>, Error>(
    [queryKeys.SERVICE_EXCEL, date, product, status],
    () => getOrders(0, '0', date, product, status),
    {
      refetchOnWindowFocus: false,
      enabled: !!date,
    }
  );

  const { excelList } = useMemo(
    () => ({
      excelList: excelData?.data.list,
    }),
    [excelData]
  );

  const confirmService = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    IConfirmList
  >(data => putOrderConfirm(data.confirmList), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.SERVICE);
      toast.success('신규주문이 배송처리 되었습니다!');
    },
  });

  return { totalPages, serviceList, confirmService, excelList };
};

export default useService;
