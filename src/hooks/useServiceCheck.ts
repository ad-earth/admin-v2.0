import { useState } from 'react';
import type { TList } from '../query/useService';
import type { IServiceList } from '../shared/types/types';

const useServiceCheck = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [confirmList, setConfirmList] = useState<TList[]>([]);

  const checkSingleItem = (
    checked: boolean,
    id: number,
    o_No: number,
    p_No: number
  ) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
      setConfirmList([...confirmList, { o_No, p_No }]);
    } else {
      setCheckedItems(checkedItems.filter(el => el !== id));
      setConfirmList(confirmList.filter(el => el.o_No !== o_No));
    }
  };

  const checkAllItems = (checked: boolean, list: IServiceList[]) => {
    if (checked) {
      setCheckedItems(list?.map(el => el.id));
      const allCheckedList = list?.map(el => ({
        o_No: el.o_No,
        p_No: el.p_No,
      }));
      setConfirmList(allCheckedList);
    } else {
      setCheckedItems([]);
      setConfirmList([]);
    }
  };

  const checkNothing = () => setCheckedItems([]);

  return {
    checkSingleItem,
    checkAllItems,
    checkNothing,
    checkedItems,
    confirmList,
  };
};

export default useServiceCheck;
