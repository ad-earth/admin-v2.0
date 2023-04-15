import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import useAdManagement from '../../query/useAdManagement';
import styles from './confirmModal.module.scss';

export interface IAdProductDeleteType {
  title: string;
  p_No?: number;
  k_No?: number[];
}

export default function AdProductDeleteModal(props: IAdProductDeleteType) {
  const { hideModal } = useModal();
  const { removeProduct } = useAdManagement();

  const changeStatus = () =>
    removeProduct.mutate({ p_No: props.p_No, k_No: props.k_No });

  return (
    <div className={styles.base}>
      <div className={styles.modalContent}>
        <h2>{props.title}</h2>
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
