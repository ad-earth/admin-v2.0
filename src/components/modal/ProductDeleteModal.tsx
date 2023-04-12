import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import useProduct from '../../query/useProduct';
import styles from './confirmModal.module.scss';

type TProductNumber = {
  p_No: number[];
};
export interface IProductDeleteType {
  title: string;
  productNo?: TProductNumber;
}

export default function ProductStatusModal(props: IProductDeleteType) {
  const { hideModal } = useModal();
  const { removeProduct } = useProduct();

  const changeStatus = () => {
    removeProduct.mutate(props.productNo, {
      onSuccess: () => hideModal(),
    });
  };
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
