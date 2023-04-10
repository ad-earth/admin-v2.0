import { toast } from 'react-hot-toast';
import useModal from '../../hooks/useModal';
import useProdManagement from '../../query/useProdManagement';
import styles from './productStatusModal.module.scss';

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
        <div>
          <button onClick={hideModal}>취소</button>
          <button onClick={changeStatus}>확인</button>
        </div>
      </div>
    </div>
  );
}
