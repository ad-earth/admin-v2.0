import type { AxiosResponse } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { delAdProd, getAdProd } from '../shared/api/apis';
import type { IAdProductSetRes } from '../shared/types/types';

type TRemove = {
  p_No: number;
  k_No: number[];
};

export default function useAdManagement(product?: number) {
  const queryClient = useQueryClient();

  const productQuery = useQuery(
    ['adProductSet', { filter: product }],
    () => getAdProd(product),
    {
      refetchOnWindowFocus: false,
      enabled: !!product,
      select: (data: AxiosResponse<IAdProductSetRes>) => ({
        keywordList: data.data.keywordList,
        cnt: data.data.cnt,
      }),
    }
  );

  const removeProduct = useMutation(
    (delData: TRemove) => delAdProd(delData.p_No, delData.k_No),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['adProductSet']);
      },
    }
  );
  return { productQuery, removeProduct };
}
