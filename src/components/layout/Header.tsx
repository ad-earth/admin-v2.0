import { useNavigate } from 'react-router-dom';
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
        {/* <SmallWhiteBtn onClick={() => navigate('/PostProd')}> */}
        <button onClick={() => navigate('/PostProd')}>상품등록</button>
        {/* </SmallWhiteBtn> */}
        <span onClick={logoutClcik}>로그아웃</span>
      </div>
    </header>
  );
}
