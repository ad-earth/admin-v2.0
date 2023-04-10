import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import useUser from '../../query/useUser';
import styles from './withdrawalModal.module.scss';

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
          <button onClick={hideModal}>취소</button>
          <button onClick={removeClick}>탈퇴하기</button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawalModal;
