import { toast } from 'react-hot-toast';
import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import styles from './adSetButtonBox.module.scss';

type TProps = {
  setDelHandler: () => void;
  product: string;
  productNum: number;
  prodLength: number;
  p_Status: boolean;
};
export default function AdSetButtonBox({
  setDelHandler,
  product,
  productNum,
  prodLength,
  p_Status,
}: TProps) {
  const { showModal } = useModal();

  const keywordBtnClcik = () => {
    if (product === '상품없음') {
      toast.error('상품을 먼저 등록해주세요');
    } else if (prodLength >= 20) {
      toast.error('상품당 키워드는 20개 까지 가능합니다.');
    } else if (!p_Status) {
      toast.error(
        '상품이 off 상태입니다. \n상품관리에서 상품상태를 변경해주세요 '
      );
    } else {
      showModal({
        modalType: 'PostAdModal',
        modalProps: {
          title: '광고등록',
          product: product,
          productNum: productNum,
        },
      });
    }
  };
  return (
    <div className={styles.base}>
      <Button onClick={setDelHandler} styleClass="border_img">
        <img
          src={process.env.PUBLIC_URL + 'assets/icon/delete.png'}
          alt="deleteIcon"
        />
        상품 삭제
      </Button>
      <Button styleClass="small_gray" onClick={keywordBtnClcik}>
        광고 등록
      </Button>
    </div>
  );
}
