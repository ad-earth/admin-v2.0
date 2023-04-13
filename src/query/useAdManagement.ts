import type { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
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
export type TAddProd = {
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
    ['adProductSet', { filter: product }],
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
        queryClient.invalidateQueries(['adProductSet']);
      },
    }
  );
  const addProduct = useMutation((addData: TAddProd) => postAdProd(addData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['adProductSet']);
      toast.success('광고를 등록했습니다.');
      hideModal();
    },
    onError: (error: AxiosError<TError>) => {
      toast.error(error.response.data.errorMessage);
    },
  });
  const changeProduct = useMutation((addData: TAddProd) => putAdProd(addData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['adProductSet']);
      toast.success('광고를 수정했습니다.');
      hideModal();
    },
    onError: (error: AxiosError<TError>) => {
      toast.error(error.response.data.errorMessage);
    },
  });
  return { productQuery, removeProduct, addProduct, changeProduct };
}
