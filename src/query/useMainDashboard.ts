import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQueries } from 'react-query';
import { getDashboard } from '../shared/api/apis';
import type {
  IAdSummaryRes,
  IKeywordsRes,
  ILastSalesRes,
  INewOrdersRes,
  IOnProductRes,
} from '../shared/types/types';

const useMainDashboard = () => {
  const results = useQueries([
    {
      queryKey: ['newOrder'],
      queryFn: () => getDashboard('new-orders'),
      staleTime: Infinity,
      select: (data: AxiosResponse<INewOrdersRes>) => data?.data?.newOrders,
    },
    {
      queryKey: ['lastMonth'],
      queryFn: () => getDashboard('last-sales'),
      staleTime: Infinity,
      select: (data: AxiosResponse<ILastSalesRes>) => data?.data?.lastSales,
    },
    {
      queryKey: ['exposedProd'],
      queryFn: () => getDashboard('on-products'),
      staleTime: Infinity,
      select: (data: AxiosResponse<IOnProductRes>) => data?.data?.productsCnt,
    },
    {
      queryKey: ['ranking'],
      queryFn: () => getDashboard('popular-keywords'),
      staleTime: Infinity,
      select: (data: AxiosResponse<IKeywordsRes>) => data?.data?.keywords,
    },
    {
      queryKey: ['adSummary'],
      queryFn: () => getDashboard('expense-reports'),
      staleTime: Infinity,
      select: (data: AxiosResponse<IAdSummaryRes>) => data?.data?.data,
    },
  ]);

  const isLoading = results.some(result => result.isLoading);

  const { boardData, rankingData } = useMemo(
    () => ({
      boardData: [
        results[0]?.data || 0,
        results[1]?.data || 0,
        results[2]?.data || 0,
      ],
      rankingData: results[3]?.data || [],
    }),
    [results]
  );

  return { isLoading, boardData, rankingData };
};
export default useMainDashboard;
