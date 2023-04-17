import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { PRICE_REG } from '../constants';

const usePriceCheck = () => {
  const [price, setPrice] = useState<string>('');
  const [discount, setDiscount] = useState<string>('');
  const [isDiscount, setIsDiscount] = useState<boolean>(false);

  const checkPrice = (id: string, value: string) => {
    if (id === 'price' && value[0] === '0')
      return toast.error('가격은 0부터 입력할 수 없습니다.');
    else if (PRICE_REG.test(value))
      return toast.error('숫자만 입력할 수 있습니다.');
    else if (id === 'price') return setPrice(value);
    else if (id === 'discount') return setDiscount(value);
  };

  const discountPrice = useMemo(() => {
    if (price && discount) {
      setIsDiscount(true);
      const discountVal =
        Number(price) - (Number(price) / 100) * Number(discount);
      return discountVal;
    } else {
      setIsDiscount(false);
      return null;
    }
  }, [price, discount]);

  return { checkPrice, price, discount, isDiscount, discountPrice };
};

export default usePriceCheck;
