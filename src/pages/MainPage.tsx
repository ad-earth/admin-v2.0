import MainAdBanner from '../components/banner/MainAdBanner';
import AdSummary from '../components/main/AdSummary';
import BoardContent from '../components/main/BoardContent';
import KeywordRanking from '../components/main/KeywordRanking';
import styles from './mainPage.module.scss';

export default function MainPage() {
  return (
    <div id={styles.container}>
      <div className={styles.container_left}>
        <MainAdBanner />
        <BoardContent />
        <div className={styles.contentWrapper}>
          <div className={styles.content_left}>
            <KeywordRanking />
          </div>
          <div className={styles.content_right}>
            {/* <BizMoneyHome /> */}
            <AdSummary />
          </div>
        </div>
      </div>
      <div className={styles.container_right}>{/* <MainBanner /> */}</div>
    </div>
  );
}
