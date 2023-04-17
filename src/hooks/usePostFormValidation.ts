import toast from 'react-hot-toast';
import type { IEditProduct } from '../query/useProduct';

const usePostFormValidation = () => {
  const formCheck = (data: IEditProduct) => {
    if (!data.p_Category) toast.error('상품의 카테고리를 선택해주세요!');
    else if (!data.p_Name) toast.error('상품명을 입력해주세요!');
    else if (!data.p_Cost) toast.error('상품 가격을 입력해주세요!');
    else if (!data.p_Desc) toast.error('상품 설명을 입력해주세요');
    else if (data.p_Desc.length < 5)
      toast.error('상품 설명은 5~30자 입력해주세요');
    else if (!data.p_Thumbnail[0] || !data.p_Thumbnail[1])
      toast.error('상품 이미지를 등록해주세요!(2개 필수)');
    else if (!data.p_Option[0].optionCnt)
      toast.error('옵션 수량 입력은 필수입니다!');
    else if (!data.p_Content) toast.error('상품의 상세 설명을 입력해주세요!');
    else return true;
  };
  return { formCheck };
};
export default usePostFormValidation;
