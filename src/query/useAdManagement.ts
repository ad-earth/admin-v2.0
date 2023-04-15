import type { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import queryKeys from '../constants/queryKeys';
import useModal from '../hooks/useModal';
import {
  delAdProd,
  getAdProd,
  postAdProd,
  putAdProd,
} from '../shared/api/apis';
import type { IAdProductSetRes, TError } from '../shared/types/types';

type TRemove = {
  p_No: number;
  k_No: number[];
};
export type TProductData = {
  p_No: number;
  keyword: string;
  k_Level: number;
  k_Cost: number;
  k_Status: boolean;
};

export default function useAdManagement(product?: number) {
  const queryClient = useQueryClient();
  const { hideModal } = useModal();

  const productQuery = useQuery(
    [queryKeys.AD_PRODUCT, { filter: product }],
    () => getAdProd(product),
    {
      refetchOnWindowFocus: false,
      enabled: !!product,
      select: (data: AxiosResponse<IAdProductSetRes>) => ({
        keywordList: data.data.keywordList,
        cnt: data.data.cnt,
        p_Status: data.data.p_Status,
        keywordLength: data.data.keywordList.length,
      }),
    }
  );
  const removeProduct = useMutation(
    (delData: TRemove) => delAdProd(delData.p_No, delData.k_No),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.AD_PRODUCT);
        toast.success('상품이 삭제되었습니다.');
        hideModal();
      },
    }
  );
  const addProduct = useMutation(
    (productData: TProductData) => postAdProd(productData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.AD_PRODUCT);
        toast.success('광고를 등록했습니다.');
        hideModal();
      },
      onError: (error: AxiosError<TError>) => {
        toast.error(error.response.data.errorMessage);
      },
    }
  );
  const changeProduct = useMutation(
    (productData: TProductData) => putAdProd(productData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.AD_PRODUCT);
        toast.success('광고를 수정했습니다.');
        hideModal();
      },
      onError: (error: AxiosError<TError>) => {
        toast.error(error.response.data.errorMessage);
      },
    }
  );
  return { productQuery, removeProduct, addProduct, changeProduct };
}
