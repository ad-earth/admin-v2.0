import type { AxiosResponse } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getProductSet, putProducts } from '../shared/api/apis';
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
      enabled: !!(category && page),
      select: (data: AxiosResponse<IProductSetRes>) => ({
        tableList: data.data.list,
        cnt: data.data.cnt,
        tableLength: data.data.list.length,
      }),
    }
  );

  const updateProduct = useMutation((no: number) => putProducts(no), {
    onSuccess: () => {
      queryClient.invalidateQueries('productSet');
    },
  });

  return { productQuery, updateProduct };
}
