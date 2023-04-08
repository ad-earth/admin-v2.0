import { Outlet } from 'react-router-dom';
import AuthSlideBanner from '../banner/AuthSlideBanner';
import styles from './authLayout.module.scss';

export default function AuthLayout() {
  return (
    <div id={styles.authWrap}>
      <main>
        <section className={styles.authSection}>
          <Outlet />
        </section>
        <section className={styles.bannerSection}>
          <AuthSlideBanner />
        </section>
      </main>
    </div>
  );
}
