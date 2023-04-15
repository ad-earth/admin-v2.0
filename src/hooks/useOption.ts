import { useRecoilState } from 'recoil';
import type { TOptionList } from '../store/option';
import { optionListState } from '../store/option';

type TProps = {
  id: string;
  name: string;
  checked?: boolean;
  value?: string;
};

const useOption = () => {
  const [list, setList] = useRecoilState(optionListState);

  const addOptionItem = () => {
    const newOption: TOptionList = {
      id: list.length + 1,
      colorCheck: false,
      optionCheck: false,
      color: null,
      colorCode: null,
      option: null,
      optionPrice: null,
      optionCnt: null,
    };
    setList([...list, newOption]);
  };

  const removeOptionItem = (id: number) => {
    if (list.length < 2) return;
    setList(list.filter(el => el.id !== id));
  };

  const optionCheck = ({ id, name, checked }: TProps) => {
    let copy = [...list];
    const findIndex = copy.findIndex(el => el.id === Number(name));
    if (findIndex !== -1 && id === 'color') {
      copy[findIndex] = { ...copy[findIndex], colorCheck: checked };
      if (!checked) {
        copy[findIndex] = { ...copy[findIndex], color: null, colorCode: null };
      }
    }
    if (findIndex !== -1 && id === 'option') {
      copy[findIndex] = { ...copy[findIndex], optionCheck: checked };
      if (!checked) {
        copy[findIndex] = { ...copy[findIndex], option: null };
      }
    }
    setList(copy);
  };

  const optionInput = ({ id, name, value }: TProps) => {
    let copy = [...list];
    const findIndex = copy.findIndex(el => el.id === Number(name));
    if (findIndex !== -1 && id === 'colorName') {
      copy[findIndex] = { ...copy[findIndex], color: value };
    }
    if (findIndex !== -1 && id === 'colorPicker') {
      copy[findIndex] = { ...copy[findIndex], colorCode: value };
    }
    if (findIndex !== -1 && id === 'optionName') {
      copy[findIndex] = { ...copy[findIndex], option: value };
    }
    if (findIndex !== -1 && id === 'optionPrice') {
      copy[findIndex] = { ...copy[findIndex], optionPrice: Number(value) };
    }
    if (findIndex !== -1 && id === 'optionCnt') {
      copy[findIndex] = { ...copy[findIndex], optionCnt: Number(value) };
    }
    setList(copy);
  };

  return { addOptionItem, removeOptionItem, optionCheck, optionInput };
};

export default useOption;
