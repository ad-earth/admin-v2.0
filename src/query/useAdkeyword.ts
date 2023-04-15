import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getAdLevel } from '../shared/api/apis';
import type { ILevelRes } from '../shared/types/types';

type TProps = {
  p_No: number;
  keyword: string;
  k_Level: number;
};

export function useAdkeyword({ p_No, keyword, k_Level }: TProps) {
  const keywordLevelQuery = useQuery(
    [queryKeys.AD_PRODUCT_KEYWORD, { keyword: keyword, k_Level: k_Level }],
    () => getAdLevel(p_No, keyword, k_Level),
    {
      enabled: !!k_Level,
      select: (data: AxiosResponse<ILevelRes>) => ({
        levelCost: data.data.levelCost,
      }),
    }
  );

  return { keywordLevelQuery };
}
