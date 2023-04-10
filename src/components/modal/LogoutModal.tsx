import { QueryCache } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import styles from './logoutModal.module.scss';

export interface ILogoutType {
  title: string;
}
const queryCache = new QueryCache();

function LogoutModal(props: ILogoutType) {
  const navigate = useNavigate();
  const { hideModal } = useModal();

  const logoutClick = () => {
    localStorage.clear();
    queryCache.clear();
    hideModal();
    navigate('/login', { replace: true });
  };

  return (
    <div className={styles.base}>
      <div className={styles.modalContent}>
        <h2>{props.title}</h2>
        <div className={styles.btnBox}>
          <button onClick={hideModal}>취소</button>
          <button onClick={logoutClick}>로그아웃</button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
