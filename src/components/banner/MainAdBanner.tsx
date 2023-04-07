import { useNavigate } from 'react-router-dom';
import styles from './mainAdBanner.module.scss';

const title = '광고지구로 비즈니스 성장을 이루세요';
const subText1 =
  'CPC 키워드 광고를 통해 잠재적 고객을 찾아 비즈니스 성장을 경험해보세요';
const subText2 =
  '광고 입찰가를 높일수록 최상단에 광고가 노출됩니다. 지금 키워드 광고를등록해 보세요!';

export default function MainAdBanner() {
  const navigate = useNavigate();
  return (
    <article className={styles.base} onClick={() => navigate('/setAd')}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subText}>
        {subText1}
        <br />
        {subText2}
      </p>
      <img
        className={styles.characterImg}
        src={process.env.PUBLIC_URL + 'assets/adBannerCharacter.svg'}
        alt="배너캐릭터"
      />
    </article>
  );
}
