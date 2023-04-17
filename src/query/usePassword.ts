import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { findPwd } from '../shared/api/apis';
import type { IPwdResponse } from '../shared/types/types';

const usePassword = (id: string, bNumber: string) => {
  return useQuery<AxiosResponse<IPwdResponse>, Error>(
    queryKeys.FIND_PWD,
    () => findPwd(id, bNumber),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: 0,
      cacheTime: 5,
    }
  );
};

export default usePassword;
