import { useNavigate } from 'react-router-dom';

import Button from '../../elements/Button';
import styles from './productButtonBox.module.scss';

type TProps = {
  setDelHandler: () => void;
};
export default function ProductSetButtonBox({ setDelHandler }: TProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.base}>
      <Button onClick={setDelHandler} styleClass="border_img">
        <img
          src={process.env.PUBLIC_URL + 'assets/icon/delete.png'}
          alt="deleteIcon"
        />
        상품 삭제
      </Button>
      <Button styleClass="small_gray" onClick={() => navigate('/postProd')}>
        상품 등록
      </Button>
    </div>
  );
}
