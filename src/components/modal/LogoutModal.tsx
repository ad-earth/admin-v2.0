import { QueryCache } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import styles from './confirmModal.module.scss';

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
          <Button
            styleClass="medium_modal_hide"
            text="취소"
            onClick={hideModal}
          />
          <Button
            styleClass="medium_modal_success"
            text="로그아웃"
            onClick={logoutClick}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
