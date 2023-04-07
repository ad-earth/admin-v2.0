import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getBiz, putBiz } from '../shared/api/apis';
import type { IBizMoneyRes } from '../shared/types/types';

export default function useBizMoney() {
  const queryClient = useQueryClient();

  const bizQuery = useQuery(['bizMoney'], getBiz, {
    select: (data: AxiosResponse<IBizMoneyRes>) => data.data.a_Charge,
  });

  const addBiz = useMutation<AxiosResponse, AxiosError>(putBiz, {
    onSuccess: () => {
      queryClient.invalidateQueries(['bizMoney']);
    },
  });

  return { bizQuery, addBiz };
}
