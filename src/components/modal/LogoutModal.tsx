import { QueryCache } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import styles from './logoutModal.module.scss';

export interface LogoutType {
  title?: string;
}
const queryCache = new QueryCache();

function LogoutModal(props: LogoutType) {
  const navigate = useNavigate();
  const { hideModal } = useModal();

  const logoutClick = () => {
    localStorage.clear();
    navigate('/', { replace: true });
    queryCache.clear();
    hideModal();
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
