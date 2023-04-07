import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { findId } from '../shared/api/apis';
import type { IdResponseType } from '../shared/types/types';

const useAccount = (brand: string, bNumber: string) => {
  const {
    data: idData,
    refetch,
    isSuccess,
  } = useQuery<AxiosResponse<IdResponseType>, Error>(
    queryKeys.FIND_ID,
    () => findId(brand, bNumber),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: 0,
    }
  );

  const id = useMemo(() => idData?.data.a_Id, [idData]);

  return { refetch, isSuccess, id };
};

export default useAccount;
