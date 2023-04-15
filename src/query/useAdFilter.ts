import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getAd } from '../shared/api/apis';

interface IAdProduct {
  p_No: number;
  p_Name: string;
}
interface IAdProductRes {
  productList: IAdProduct[];
}
export default function useAdFilter() {
  const AdfilterQuery = useQuery(queryKeys.AD_PRODUCT_FILTER, getAd, {
    refetchOnWindowFocus: false,
    select: (data: AxiosResponse<IAdProductRes>) => data.data,
  });

  const AdFilterList = useMemo(
    () =>
      (AdfilterQuery?.data?.productList.length > 0 &&
        AdfilterQuery?.data?.productList.map(list => list.p_Name)) || [
        '상품없음',
      ],
    [AdfilterQuery]
  );
  return { AdfilterQuery, AdFilterList };
}
