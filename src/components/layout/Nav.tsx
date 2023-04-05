import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';

export default function Nav() {
  const withdrawalClcik = () => {};
  return (
    <nav id={styles.navWrap}>
      <div className={styles.bizMoneyBox}>{/* <BizMoneyNav /> */}</div>
      <ul className={styles.navListBox}>
        {nav.map(link => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${styles.isActive}` : `${styles.inActive}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.withdrawalBtnBox}>
        <button onClick={withdrawalClcik}>회원탈퇴</button>
      </div>
    </nav>
  );
}

const nav = [
  { id: 1, name: '메인', path: '/' },
  { id: 2, name: '배송 관리', path: '/shipping_service' },
  { id: 3, name: '상품 등록', path: '/postProd' },
  { id: 4, name: '상품 관리', path: '/setProd' },
  { id: 5, name: '광고 관리', path: '/setAd' },
  { id: 6, name: '광고 보고서', path: '/ad_report' },
];
