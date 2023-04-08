import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getProducts } from '../shared/api/apis';
import type { IProductsResponse } from '../shared/types/types';

const useProducts = () => {
  const { data } = useQuery<AxiosResponse<IProductsResponse>, AxiosError>(
    queryKeys.PRODUCTS,
    getProducts
  );

  const productList = useMemo(() => data?.data.productList, [data]);

  return { productList };
};

export default useProducts;
