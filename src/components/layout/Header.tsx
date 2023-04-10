import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import styles from './header.module.scss';

export default function Header() {
  const navigate = useNavigate();
  const { showModal } = useModal();

  const logoutClcik = () =>
    showModal({
      modalType: 'LogoutModal',
      modalProps: {
        title: '로그아웃 하시겠습니까?',
      },
    });

  return (
    <header>
      <img
        src={process.env.PUBLIC_URL + 'assets/logo/header.svg'}
        onClick={() => navigate('/')}
        alt="logo"
      />
      <div className={styles.asideBtnMenu}>
        <Button
          styleClass="border_small_blue"
          text="상품등록"
          onClick={() => navigate('/PostProd')}
        />
        <span onClick={logoutClcik}>로그아웃</span>
      </div>
    </header>
  );
}
