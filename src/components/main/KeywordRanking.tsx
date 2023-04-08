import useMainDashboard from '../../query/useMainDashboard';
import styles from './keywordRanking.module.scss';

export default function KeywordRanking() {
  const { rankingData, isLoading } = useMainDashboard();

  if (isLoading) return <>...isLoading</>;
  return (
    <article className={styles.base}>
      <h3 className={styles.title}>광고 키워드 순위</h3>
      <ul>
        {rankingData.map((list, index) => (
          <li key={index} className={styles.rankingBox}>
            <span className={styles.rankingText}>{index + 1}</span>
            {list}
          </li>
        ))}
      </ul>
    </article>
  );
}
