import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import queryKeys from '../constants/queryKeys';
import { getProdInfo } from '../shared/api/apis';
import { optionListState } from '../store/option';
import type { IProdResponse, TOptionList } from './../shared/types/types';

const useGetProduct = (p_No: number) => {
  const list = useSetRecoilState(optionListState);
  const { data: prodData } = useQuery<AxiosResponse<IProdResponse>, Error>(
    [queryKeys.PRODUCT_INFO],
    () => getProdInfo(p_No),
    {
      refetchOnWindowFocus: false,
      enabled: !!p_No,
      cacheTime: 1000 * 1,
      onSuccess: ({ data }) => {
        let result = data.p_Option;
        let resultList = result.map((item: TOptionList, idx: number) => ({
          id: idx + 1,
          colorCheck: item.color ? true : false,
          optionCheck: item.option ? true : false,
          color: item.color,
          colorCode: item.colorCode,
          option: item.option,
          optionPrice: item.optionPrice,
          optionCnt: item.optionCnt,
        }));
        list(resultList);
      },
    }
  );
  const { prodList } = useMemo(
    () => ({
      prodList: prodData?.data,
    }),
    [prodData]
  );
  return { prodList };
};

export default useGetProduct;
