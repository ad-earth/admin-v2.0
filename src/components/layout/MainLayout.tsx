import { Outlet } from 'react-router-dom';
import Header from './Header';
import styles from './mainLayout.module.scss';
import Nav from './Nav';

export default function MainLayout() {
  return (
    <div id={styles.MainWrap}>
      <Header />
      <main>
        <Nav />
        <section className={styles.mainSection}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
