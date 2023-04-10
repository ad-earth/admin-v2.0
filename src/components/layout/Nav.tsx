import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import useMinDate from '../../hooks/useMinDate';
import useModal from '../../hooks/useModal';
import { BizMoneyNav } from '../main/BizMoney';
import styles from './nav.module.scss';

export default function Nav() {
  const { showModal } = useModal();

  const startDate = useMinDate();
  const endDate = useMemo(() => new Date().toISOString().substring(0, 10), []);

  const withdrawalClcik = () =>
    showModal({
      modalType: 'WithdrawalModal',
      modalProps: {
        title:
          '가입된 회원정보가 모두 삭제됩니다.회원 탈퇴를 진행하시겠습니까?',
      },
    });

  const nav = [
    { id: 1, name: '메인', path: '/' },
    {
      id: 2,
      name: '배송 관리',
      path: `/shipping_service?start=${startDate}&end=${endDate}&products=전체&parcel=전체&page=1`,
    },
    { id: 3, name: '상품 등록', path: '/postProd' },
    { id: 4, name: '상품 관리', path: '/setProd' },
    { id: 5, name: '광고 관리', path: '/setAd' },
    { id: 6, name: '광고 보고서', path: '/ad_report' },
  ];

  return (
    <nav id={styles.navWrap}>
      <div className={styles.bizMoneyBox}>
        <BizMoneyNav />
      </div>
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
