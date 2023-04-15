import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import useAuth from '../../query/useAuth';
import styles from './confirmModal.module.scss';

export interface IWithdrawalType {
  title: string;
}
function WithdrawalModal({ title }: IWithdrawalType) {
  const { hideModal } = useModal();
  const { removeUser } = useAuth();

  return (
    <div className={styles.base}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <div className={styles.btnBox}>
          <Button
            styleClass="medium_modal_hide"
            text="취소"
            onClick={hideModal}
          />
          <Button
            styleClass="medium_modal_success"
            text="탈퇴하기"
            onClick={removeUser.mutate}
          />
        </div>
      </div>
    </div>
  );
}

export default WithdrawalModal;
