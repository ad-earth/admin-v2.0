import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQueries } from 'react-query';
import queryKeys from '../constants/queryKeys';
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
      queryKey: queryKeys.NEW_ORDER,
      queryFn: () => getDashboard('new-orders'),
      staleTime: Infinity,
      select: (data: AxiosResponse<INewOrdersRes>) => data?.data?.newOrders,
    },
    {
      queryKey: queryKeys.LAST_SALES,
      queryFn: () => getDashboard('last-sales'),
      staleTime: Infinity,
      select: (data: AxiosResponse<ILastSalesRes>) => data?.data?.lastSales,
    },
    {
      queryKey: queryKeys.ON_PRODUCT,
      queryFn: () => getDashboard('on-products'),
      staleTime: Infinity,
      select: (data: AxiosResponse<IOnProductRes>) => data?.data?.productsCnt,
    },
    {
      queryKey: queryKeys.POPULAR_KEYWORDS,
      queryFn: () => getDashboard('popular-keywords'),
      staleTime: Infinity,
      select: (data: AxiosResponse<IKeywordsRes>) => data?.data?.keywords,
    },
    {
      queryKey: queryKeys.EXPENSE_REPORTS,
      queryFn: () => getDashboard('expense-reports'),
      staleTime: Infinity,
      select: (data: AxiosResponse<IAdSummaryRes>) => data?.data?.data,
    },
  ]);

  const isLoading = results.some(result => result.isLoading);

  const { boardData, rankingData, monthData, adCostData, salesCostData } =
    useMemo(
      () => ({
        boardData: [
          results[0]?.data || 0,
          results[1]?.data || 0,
          results[2]?.data || 0,
        ],
        rankingData: results[3]?.data || [],
        monthData: results[4]?.data?.map(data => data.month) || ['월'],
        adCostData: results[4]?.data?.map(data => data.adCost) || [0],
        salesCostData: results[4]?.data?.map(data => data.salesCost) || [0],
      }),
      [results]
    );

  return {
    isLoading,
    boardData,
    rankingData,
    monthData,
    adCostData,
    salesCostData,
  };
};
export default useMainDashboard;
