import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { findId } from '../shared/api/apis';
import type { IIdResponse } from '../shared/types/types';

const useId = (brand: string, bNumber: string) => {
  const { data, refetch, isSuccess } = useQuery<
    AxiosResponse<IIdResponse>,
    Error
  >(queryKeys.FIND_ID, () => findId(brand, bNumber), {
    refetchOnWindowFocus: false,
    enabled: false,
    retry: 0,
  });

  const id = useMemo(() => data?.data.a_Id, [data]);

  return { refetch, isSuccess, id };
};

export default useId;
