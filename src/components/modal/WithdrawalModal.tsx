import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import useUser from '../../query/useUser';
import styles from './confirmModal.module.scss';

export interface IWithdrawalType {
  title: string;
}
function WithdrawalModal({ title }: IWithdrawalType) {
  const navigate = useNavigate();
  const { hideModal } = useModal();
  const { removeUser } = useUser();

  if (removeUser.isSuccess) {
    localStorage.clear();
    navigate('/', { replace: true });
    hideModal();
  }
  const removeClick = () => {
    removeUser.mutate();
  };
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
            onClick={removeClick}
          />
        </div>
      </div>
    </div>
  );
}

export default WithdrawalModal;
