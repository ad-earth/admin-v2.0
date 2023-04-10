import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getProducts } from '../shared/api/apis';
import type { IProduct, IProductsResponse } from '../shared/types/types';

const useProducts = () => {
  const { data } = useQuery<AxiosResponse<IProductsResponse>, AxiosError>(
    queryKeys.PRODUCTS,
    getProducts
  );

  const productList = useMemo(() => data?.data.productList, [data]);

  const parcelList = useMemo(() => {
    const newList = productList?.map((el: IProduct) => el.p_Name);
    newList?.unshift('전체');
    return newList;
  }, [productList]);

  return { productList, parcelList };
};

export default useProducts;
