import { Outlet } from 'react-router-dom';
import styles from './authLayout.module.scss';

export default function AuthLayout() {
  return (
    <div id={styles.authWrap}>
      <main>
        <section className={styles.authSection}>
          <Outlet />
        </section>
        <section className={styles.bannerSection}>
          {/* <SlideBanner /> */}
        </section>
      </main>
    </div>
  );
}
