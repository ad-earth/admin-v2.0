import type { AxiosResponse } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { delProducts, getProductSet, putProducts } from '../shared/api/apis';
import type { IProductSetRes } from '../shared/types/types';

export default function useProdManagement() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const page = searchParams.get('page');

  const productQuery = useQuery(
    ['productSet', { category: category, page: page }],
    () => getProductSet(category, page),
    {
      refetchOnWindowFocus: false,
      // staleTime: 60 * 1000,
      enabled: !!(category && page),
      select: (data: AxiosResponse<IProductSetRes>) => ({
        tableList: data.data.list,
        cnt: data.data.cnt,
      }),
    }
  );

  const removeProduct = useMutation((p_No: number[]) => delProducts(p_No), {
    onSuccess: () => {
      queryClient.invalidateQueries(['productSet']);
    },
  });
  const updateProduct = useMutation((no: number) => putProducts(no), {
    onSuccess: () => {
      queryClient.invalidateQueries('productSet');
    },
  });

  return { productQuery, removeProduct, updateProduct };
}
