import { atom, selector } from 'recoil';

export type TOptionList = {
  id: number;
  colorCheck: boolean;
  optionCheck: boolean;
  color: string | null;
  colorCode: string | null;
  option: string | null;
  optionPrice: number | null;
  optionCnt: number | null;
};

export const optionListState = atom<TOptionList[]>({
  key: 'OptionListState',
  default: [
    {
      id: 1,
      colorCheck: false,
      optionCheck: false,
      color: null,
      colorCode: null,
      option: null,
      optionPrice: null,
      optionCnt: null,
    },
  ],
});

export const optionList = selector({
  key: 'optionList',
  get: ({ get }) => {
    const listItem = get(optionListState);
    return listItem.map(item => ({
      color: item.color,
      colorCode: item.colorCode,
      option: item.option,
      optionPrice: item.optionPrice,
      optionCnt: item.optionCnt,
    }));
  },
});
