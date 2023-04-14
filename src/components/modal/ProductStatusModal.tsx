import { toast } from 'react-hot-toast';
import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import useProdManagement from '../../query/useProdManagement';
import styles from './confirmModal.module.scss';

export interface IProductStatusType {
  title: string;
  no?: number;
}

export default function ProductStatusModal(props: IProductStatusType) {
  const { hideModal } = useModal();
  const { updateProduct } = useProdManagement();

  const changeStatus = () => {
    updateProduct.mutate(props.no, {
      onSuccess: () => {
        toast.success('노출을 변경하였습니다.');
        hideModal();
      },
    });
  };
  return (
    <div className={styles.base}>
      <div className={styles.modalContent}>
        <h2>{props.title}</h2>
        <p className={styles.subTitle}> 미 노출시 상품 노출이 불가능합니다.</p>
        <div className={styles.btnBox}>
          <Button
            styleClass="medium_modal_hide"
            text="취소"
            onClick={hideModal}
          />
          <Button
            styleClass="medium_modal_success"
            text="확인"
            onClick={changeStatus}
          />
        </div>
      </div>
    </div>
  );
}
