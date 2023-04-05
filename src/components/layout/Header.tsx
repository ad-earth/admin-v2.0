import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss';

export default function Header() {
  const navigate = useNavigate();
  const logoutClcik = () => {};

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
